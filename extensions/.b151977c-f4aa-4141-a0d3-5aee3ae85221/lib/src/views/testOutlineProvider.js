"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestOutlineProvider = exports.AgentTestOutlineProvider = exports.parseAgentTestsFromProject = void 0;
/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const os_1 = require("os");
const path_1 = require("path");
const vscode = __importStar(require("vscode"));
const xml = __importStar(require("fast-xml-parser"));
const commands_1 = require("../enums/commands");
const types_1 = require("../types");
const NO_TESTS_MESSAGE = 'no tests found';
const NO_TESTS_DESCRIPTION = 'no test description';
const AGENT_TESTS = 'AgentTests';
const parseAgentTestsFromProject = async () => {
    const aiTestDefs = await vscode.workspace.findFiles('**/*.aiEvaluationDefinition-meta.xml');
    //from the aiTestDef files, parse the xml using fast-xml-parser, find the testSetName that it points to
    const aggregator = new Map();
    const parser = new xml.XMLParser();
    await Promise.all(aiTestDefs.map(async (definition) => {
        const fileContent = (await vscode.workspace.fs.readFile(definition)).toString();
        const testDefinition = parser.parse(fileContent);
        const definitionApiName = (0, path_1.basename)(definition.fsPath, '.aiEvaluationDefinition-meta.xml');
        const testDefinitionNode = new types_1.AgentTestGroupNode(definitionApiName, new vscode.Location(definition, new vscode.Position(0, 0)));
        const splitContent = fileContent.split(os_1.EOL);
        (Array.isArray(testDefinition.AiEvaluationDefinition.testCase)
            ? // xml parser will not parse single node into array
                testDefinition.AiEvaluationDefinition.testCase
            : [testDefinition.AiEvaluationDefinition.testCase]).map(test => {
            const line = splitContent.findIndex(l => l.includes(`<number>${test.number}</number`));
            const testcaseNode = new types_1.AgentTestNode(`#${test.number}`, new vscode.Location(definition, new vscode.Position(line, 8)));
            testcaseNode.parentName = definitionApiName;
            testcaseNode.description = test.inputs.utterance;
            testDefinitionNode.children.push(testcaseNode);
        });
        // Sort test cases alphabetically by name
        testDefinitionNode.children.sort((a, b) => a.name.localeCompare(b.name));
        aggregator.set(testDefinitionNode.name, testDefinitionNode);
    }));
    return aggregator;
};
exports.parseAgentTestsFromProject = parseAgentTestsFromProject;
class AgentTestOutlineProvider {
    // communicates to VSC that the data has changed and needs to be rerendered - these are vitally important
    onDidChangeTestData = new vscode.EventEmitter();
    onDidChangeTreeData = this.onDidChangeTestData.event;
    // matches from definition name -> definition tree object, with children test cases
    agentTestMap = new Map();
    rootNode;
    constructor() {
        this.rootNode = new types_1.AgentTestGroupNode(AGENT_TESTS);
    }
    getTestGroup(key) {
        return this.agentTestMap.get(key);
    }
    refreshView() {
        this.onDidChangeTestData.fire(undefined);
    }
    getChildren(element) {
        if (element) {
            return element.children;
        }
        else {
            if (this.rootNode && this.rootNode.children.length > 0) {
                return this.rootNode.children;
            }
            else {
                const testToDisplay = new types_1.AgentTestNode(NO_TESTS_MESSAGE);
                testToDisplay.description = NO_TESTS_DESCRIPTION;
                return [testToDisplay];
            }
        }
    }
    getTreeItem(element) {
        if (element) {
            return element;
        }
        else {
            if (!(this.rootNode && this.rootNode.children.length > 0)) {
                this.rootNode = new types_1.AgentTestGroupNode(NO_TESTS_MESSAGE);
                const testToDisplay = new types_1.AgentTestNode(NO_TESTS_MESSAGE);
                testToDisplay.description = NO_TESTS_DESCRIPTION;
                this.rootNode.children.push(testToDisplay);
            }
            return this.rootNode;
        }
    }
    async refresh() {
        this.rootNode = new types_1.AgentTestGroupNode(AGENT_TESTS);
        this.agentTestMap.clear();
        this.agentTestMap = await (0, exports.parseAgentTestsFromProject)();
        // Sort test groups alphabetically by name
        const sortedTestGroups = Array.from(this.agentTestMap.values()).sort((a, b) => a.name.localeCompare(b.name));
        this.rootNode.children.push(...sortedTestGroups);
        this.refreshView();
    }
    async collapseAll() {
        return vscode.commands.executeCommand(`workbench.actions.treeView.${commands_1.Commands.collapseAll}`);
    }
}
exports.AgentTestOutlineProvider = AgentTestOutlineProvider;
let testOutlineProviderInst;
const getTestOutlineProvider = () => {
    if (!testOutlineProviderInst) {
        testOutlineProviderInst = new AgentTestOutlineProvider();
    }
    return testOutlineProviderInst;
};
exports.getTestOutlineProvider = getTestOutlineProvider;
//# sourceMappingURL=testOutlineProvider.js.map