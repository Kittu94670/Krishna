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
exports.AgentTestNode = exports.AgentTestGroupNode = exports.TestNode = void 0;
const vscode = __importStar(require("vscode"));
const testOutlineProvider_1 = require("../views/testOutlineProvider");
/**
 * Abstract, meant for functionality that will affect all levels of nodes (top, sub)
 */
class TestNode extends vscode.TreeItem {
    name;
    location;
    children = new Array();
    parentName = '';
    resourceDir = vscode.Uri.joinPath(vscode.extensions.getExtension('salesforce.salesforcedx-vscode-agents').extensionUri, 'resources');
    iconPath = {
        light: vscode.Uri.joinPath(this.resourceDir, 'light', 'testNotRun.svg'),
        dark: vscode.Uri.joinPath(this.resourceDir, 'dark', 'testNotRun.svg')
    };
    constructor(name, collapsibleState, location) {
        super(name, collapsibleState);
        this.name = name;
        this.location = location;
        this.command = {
            command: `sf.agent.test.view.goToTestResults`,
            title: 'SHOW ERROR',
            arguments: [this]
        };
    }
    updateOutcome(outcome) {
        switch (outcome) {
            case 'COMPLETED': // Passed Test
                this.iconPath = {
                    light: vscode.Uri.joinPath(this.resourceDir, 'light', 'testPass.svg'),
                    dark: vscode.Uri.joinPath(this.resourceDir, 'dark', 'testPass.svg')
                };
                break;
            case 'TERMINATED':
            case 'ERROR':
                this.iconPath = {
                    light: vscode.Uri.joinPath(this.resourceDir, 'light', 'testFail.svg'),
                    dark: vscode.Uri.joinPath(this.resourceDir, 'dark', 'testFail.svg')
                };
                break;
            case 'NEW':
            case 'IN_PROGRESS':
                this.iconPath = {
                    light: vscode.Uri.joinPath(this.resourceDir, 'light', 'testInProgress.svg'),
                    dark: vscode.Uri.joinPath(this.resourceDir, 'dark', 'testInProgress.svg')
                };
                break;
        }
        // refreshes the icon to the new one
        (0, testOutlineProvider_1.getTestOutlineProvider)().refreshView();
    }
}
exports.TestNode = TestNode;
/**
 * Top level test container, this is a runnable agent test
 * has children AgentTestNode for individual test cases
 */
class AgentTestGroupNode extends TestNode {
    constructor(label, location) {
        super(label, vscode.TreeItemCollapsibleState.Expanded, location ?? null);
    }
    contextValue = 'agentTestGroup';
    updateOutcome(outcome, applyToChildren) {
        super.updateOutcome(outcome);
        if (applyToChildren) {
            this.children.forEach(child => {
                child.updateOutcome(outcome);
            });
        }
    }
    getChildren() {
        return this.children;
    }
}
exports.AgentTestGroupNode = AgentTestGroupNode;
/**
 * child test cases, not individually runnable
 */
class AgentTestNode extends TestNode {
    constructor(label, location) {
        super(label, vscode.TreeItemCollapsibleState.None, location ?? null);
    }
    contextValue = 'agentTest';
}
exports.AgentTestNode = AgentTestNode;
//# sourceMappingURL=TestNodes.js.map