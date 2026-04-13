"use strict";
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
exports.AgentTestRunner = void 0;
const vscode = __importStar(require("vscode"));
const agents_1 = require("@salesforce/agents");
const core_1 = require("@salesforce/core");
const kit_1 = require("@salesforce/kit");
const coreExtensionService_1 = require("../services/coreExtensionService");
const types_1 = require("../types");
const jsonFormatter_1 = require("../utils/jsonFormatter");
class AgentTestRunner {
    testOutline;
    testGroupNameToResult = new Map();
    constructor(testOutline) {
        this.testOutline = testOutline;
    }
    displayTestDetails(test) {
        const channelService = coreExtensionService_1.CoreExtensionService.getTestChannelService();
        channelService.showChannelOutput();
        channelService.clear();
        if (test.parentName == '') {
            // this is the parent test group, so we only show the test summary, test id
            const result = this.testGroupNameToResult.get(test.name);
            if (result) {
                channelService.appendLine(`Job Id: ${result.id}`);
                this.printTestSummary(result);
            }
            else {
                vscode.window.showErrorMessage('You must run the agent test first to see its results.');
            }
            return;
        }
        const resultFromMap = this.testGroupNameToResult.get(test.name) ?? this.testGroupNameToResult.get(test.parentName);
        if (!resultFromMap) {
            vscode.window.showErrorMessage('You need to run the test first to see its results.');
            return;
        }
        // set to a new var so we can remove test cases and not affect saved information
        const testInfo = structuredClone(resultFromMap);
        if (test instanceof types_1.AgentTestNode) {
            // filter to selected test case
            testInfo.testCases = testInfo.testCases.filter(f => `#${f.testNumber}` === test.name);
        }
        testInfo.testCases.map(tc => {
            channelService.appendLine('════════════════════════════════════════════════════════════════════════');
            channelService.appendLine(`CASE #${tc.testNumber} - ${testInfo.subjectName}`);
            channelService.appendLine('════════════════════════════════════════════════════════════════════════');
            channelService.appendLine('');
            channelService.appendLine(`"${tc.inputs.utterance}"`);
            channelService.appendLine('');
            tc.testResults
                // this is the output for topics/action/output validation (actual v expected)
                // filter out other metrics from it
                .filter(f => !agents_1.metric.includes(f.name))
                .map(tr => {
                channelService.appendLine(`❯ ${(0, agents_1.humanFriendlyName)(tr.name).toUpperCase()}: ${tr.result} ${tr.result === 'PASS' ? '✅' : '❌'}`);
                channelService.appendLine('────────────────────────────────────────────────────────────────────────');
                channelService.appendLine(`EXPECTED : ${tr.expectedValue.replaceAll('\n', '')}`);
                channelService.appendLine(`ACTUAL   : ${tr.actualValue.replaceAll('\n', '')}`);
                channelService.appendLine(`SCORE    : ${tr.score}`);
                channelService.appendLine('');
            });
            // Show generated data only if enabled in settings
            const showGeneratedData = vscode.workspace
                .getConfiguration('salesforce.agentforceDX')
                .get('showGeneratedData');
            if (showGeneratedData && tc.generatedData?.actionsSequence?.length > 2) {
                channelService.appendLine('❯ ACTION: INVOCATION ℹ️');
                channelService.appendLine('────────────────────────────────────────────────────────────────────────');
                channelService.appendLine((0, jsonFormatter_1.formatJson)(tc.generatedData.invokedActions));
                channelService.appendLine('');
            }
            const metricResults = tc.testResults
                // this is the output for metric information
                // filter out the standard evaluations (topics/action/output)
                .filter(f => agents_1.metric.includes(f.name));
            if (metricResults.length > 0) {
                channelService.appendLine(`❯ METRICS (Value/Threshold)`);
                channelService.appendLine('────────────────────────────────────────────────────────────────────────');
                metricResults.map(tr => {
                    if (tr.name === 'output_latency_milliseconds') {
                        channelService.appendLine(`⏱️ : ${(0, agents_1.humanFriendlyName)(tr.name).toUpperCase()} (${tr.score}ms)  ${tr.metricExplainability ? `: ${tr.metricExplainability}` : ''}`);
                    }
                    else {
                        channelService.appendLine(
                        // 3 is the threshold for passing, hardcoded for now
                        `${tr.result === 'PASS' ? '✅' : '❌'} : ${(0, agents_1.humanFriendlyName)(tr.name).toUpperCase()} (${tr.score}/3) ${tr.metricExplainability ? `: ${tr.metricExplainability}` : ''}`);
                    }
                });
            }
            channelService.appendLine('');
            channelService.appendLine('────────────────────────────────────────────────────────────────────────');
            channelService.appendLine(`TEST CASE SUMMARY: ${tc.testResults.length} tests run | ✅ ${tc.testResults.filter(tc => tc.result === 'PASS').length} passed | ❌ ${tc.testResults.filter(tc => tc.result === 'FAILURE').length} failed`);
        });
    }
    async runAgentTest(test) {
        const channelService = coreExtensionService_1.CoreExtensionService.getTestChannelService();
        const telemetryService = coreExtensionService_1.CoreExtensionService.getTelemetryService();
        const commandName = 'RunAgentTest';
        const hrstart = process.hrtime();
        telemetryService?.sendCommandEvent(commandName, hrstart, { commandName });
        try {
            const configAggregator = await core_1.ConfigAggregator.create();
            const lifecycle = await core_1.Lifecycle.getInstance();
            channelService.clear();
            channelService.showChannelOutput();
            const tester = new agents_1.AgentTester(await coreExtensionService_1.CoreExtensionService.getDefaultConnection());
            channelService.appendLine(`Starting ${test.name} tests: ${new Date().toLocaleString()}`);
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: `Running ${test.name}...`
            }, async (progress) => {
                return new Promise((resolve, reject) => {
                    lifecycle.on('AGENT_TEST_POLLING_EVENT', async (data) => {
                        switch (data.status) {
                            case 'NEW':
                            case 'IN_PROGRESS':
                                // every time IN_PROGRESS is returned, 10 is added, is possible to 100% progress bar and tests not be done
                                progress.report({ increment: 10, message: `Status: In Progress` });
                                break;
                            case 'ERROR':
                            case 'TERMINATED':
                                progress.report({ increment: 100, message: `Status: ${data.status}` });
                                setTimeout(() => reject(), 1500);
                                break;
                            case 'COMPLETED':
                                progress.report({ increment: 100, message: `Status: ${data.status}` });
                                setTimeout(() => resolve({}), 1500);
                                break;
                        }
                    });
                });
            });
            const response = await tester.start(test.name);
            // begin in-progress
            this.testOutline.getTestGroup(test.name)?.updateOutcome('IN_PROGRESS', true);
            const result = {
                ...(await tester.poll(response.runId, { timeout: kit_1.Duration.minutes(100) })),
                id: response.runId
            };
            result.id = response.runId;
            channelService.appendLine(`Job Id: ${result.id}`);
            this.testGroupNameToResult.set(test.name, result);
            this.testOutline.getTestGroup(test.name)?.updateOutcome('IN_PROGRESS', true);
            let hasFailure = false;
            result.testCases.map(tc => {
                hasFailure = tc.testResults.some(tr => tr.result === 'FAILURE');
                // update the children, accordingly if they passed/failed
                this.testOutline
                    .getTestGroup(test.name)
                    ?.getChildren()
                    .find(child => child.name === `#${tc.testNumber}`)
                    ?.updateOutcome(hasFailure ? 'ERROR' : 'COMPLETED');
            });
            // update the parent's icon
            this.testOutline.getTestGroup(test.name)?.updateOutcome(hasFailure ? 'ERROR' : 'COMPLETED');
            this.printTestSummary(result);
        }
        catch (e) {
            const error = e;
            void core_1.Lifecycle.getInstance().emit('AGENT_TEST_POLLING_EVENT', { status: 'ERROR' });
            this.testOutline.getTestGroup(test.name)?.updateOutcome('ERROR', true);
            channelService.appendLine(`Error running test: ${error.message}`);
            telemetryService?.sendException(error.name, error.message);
        }
    }
    printTestSummary(result) {
        const channelService = coreExtensionService_1.CoreExtensionService.getTestChannelService();
        channelService.appendLine(result.status);
        channelService.appendLine('');
        channelService.appendLine('Test Results');
        const total = result.testCases.length;
        channelService.appendLine(`Passing: ${result.testCases.filter(tc => tc.testResults.every(tr => tr.result === 'PASS')).length}/${total}`);
        channelService.appendLine(`Failing: ${result.testCases.filter(tc => tc.testResults.some(tr => tr.result === 'FAILURE')).length}/${total}`);
        channelService.appendLine('');
        channelService.appendLine(`Select a test case in the Test View panel for more information`);
    }
}
exports.AgentTestRunner = AgentTestRunner;
//# sourceMappingURL=testRunner.js.map