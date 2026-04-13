"use strict";
/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAndDebugTests = void 0;
const apex_node_1 = require("@salesforce/apex-node");
const salesforcedx_utils_vscode_1 = require("@salesforce/salesforcedx-utils-vscode");
const path = require("node:path");
const vscode = require("vscode");
const checkpointService_1 = require("../breakpoints/checkpointService");
const channels_1 = require("../channels");
const messages_1 = require("../messages");
const ensureTraceFlags_1 = require("../services/ensureTraceFlags");
const settings_1 = require("../utils/settings");
const launchFromLogFile_1 = require("./launchFromLogFile");
class QuickLaunch {
    async debugTest(testClass, testName) {
        const connection = await vscode.extensions
            .getExtension('salesforce.salesforcedx-vscode-core')
            ?.exports.services.WorkspaceContext.getInstance()
            .getConnection();
        if (!connection) {
            return false;
        }
        if (!(await (0, ensureTraceFlags_1.ensureTraceFlagsForCurrentUser)())) {
            return false;
        }
        const oneOrMoreCheckpoints = checkpointService_1.checkpointService.hasOneOrMoreActiveCheckpoints();
        if (oneOrMoreCheckpoints) {
            const createCheckpointsResult = await (0, checkpointService_1.sfCreateCheckpoints)();
            if (!createCheckpointsResult) {
                return false;
            }
        }
        const testResult = await this.runTests(connection, testClass, testName);
        if (testResult.success && testResult.logFileId) {
            const logFileRetrieve = await this.retrieveLogFile(connection, testResult.logFileId);
            if (logFileRetrieve.success && logFileRetrieve.filePath) {
                await (0, launchFromLogFile_1.launchFromLogFile)(logFileRetrieve.filePath, false);
                return true;
            }
        }
        else if (testResult.message) {
            salesforcedx_utils_vscode_1.notificationService.showErrorMessage(testResult.message);
        }
        return false;
    }
    async runTests(connection, testClass, testMethod) {
        const testService = new apex_node_1.TestService(connection);
        try {
            const singleTestName = testMethod ? `${testClass}.${testMethod}` : undefined;
            const payload = await testService.buildSyncPayload("RunSpecifiedTests" /* TestLevel.RunSpecifiedTests */, singleTestName, singleTestName ? undefined : testClass, undefined, !(0, settings_1.retrieveTestCodeCoverage)() // the setting enables code coverage, so we need to pass false to disable it
            );
            // W-18453221
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            const result = (await testService.runTestSynchronous(payload, true));
            if (salesforcedx_utils_vscode_1.workspaceUtils.hasRootWorkspace()) {
                const apexTestResultsPath = salesforcedx_utils_vscode_1.projectPaths.apexTestResultsFolder();
                await testService.writeResultFiles(result, { dirPath: apexTestResultsPath, resultFormats: [apex_node_1.ResultFormat.json] }, (0, settings_1.retrieveTestCodeCoverage)());
            }
            const tests = result.tests;
            if (tests.length === 0) {
                return {
                    success: false,
                    message: messages_1.nls.localize('debug_test_no_results_found')
                };
            }
            const testResult = testMethod ? tests.find(test => test.methodName === testMethod) ?? tests[0] : tests[0];
            if (!testResult?.apexLogId) {
                return {
                    success: false,
                    message: messages_1.nls.localize('debug_test_no_debug_log')
                };
            }
            return { logFileId: testResult.apexLogId, success: true };
        }
        catch (e) {
            return { message: e.message, success: false };
        }
    }
    async retrieveLogFile(connection, logId) {
        const logService = new apex_node_1.LogService(connection);
        const outputDir = salesforcedx_utils_vscode_1.projectPaths.debugLogsFolder();
        await logService.getLogs({ logId, outputDir });
        const logPath = path.join(outputDir, `${logId}.log`);
        return { filePath: logPath, success: true };
    }
}
class TestDebuggerExecutor extends salesforcedx_utils_vscode_1.LibraryCommandletExecutor {
    constructor() {
        super(messages_1.nls.localize('debug_test_exec_name'), 'debug_test_replay_debugger', channels_1.OUTPUT_CHANNEL);
    }
    async run(response) {
        if (!response.data) {
            return false;
        }
        const className = response.data[0];
        const methodName = response.data[1];
        const quickLaunch = new QuickLaunch();
        const success = await quickLaunch.debugTest(className, methodName);
        return success;
    }
}
const setupAndDebugTests = async (className, methodName) => {
    const executor = new TestDebuggerExecutor();
    const response = {
        type: 'CONTINUE',
        data: [className, methodName].filter((f) => f !== undefined)
    };
    await executor.execute(response);
};
exports.setupAndDebugTests = setupAndDebugTests;
//# sourceMappingURL=quickLaunch.js.map