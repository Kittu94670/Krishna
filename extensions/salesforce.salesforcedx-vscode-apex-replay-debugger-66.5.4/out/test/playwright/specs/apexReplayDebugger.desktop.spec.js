"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2026, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* eslint-disable unicorn/numeric-separators-style -- timeouts use numeric literals; rule conflicts for 4–5 digit values */
const test_1 = require("@playwright/test");
const playwright_vscode_ext_1 = require("@salesforce/playwright-vscode-ext");
const package_nls_json_1 = require("salesforcedx-vscode-apex-log/package.nls.json");
const package_nls_json_2 = require("salesforcedx-vscode-metadata/package.nls.json");
const package_nls_json_3 = require("../../../package.nls.json");
const fixtures_1 = require("../fixtures");
/** Continue debug session (dismiss hover, Escape, then F5). Repeats until session ends. */
const continueDebugSession = async (page, maxContinues = 2) => {
    const toolbar = page.locator('.debug-toolbar');
    for (let i = 0; i < maxContinues; i++) {
        await toolbar.waitFor({ state: 'visible', timeout: 15_000 });
        // Click editor area to dismiss search-bar hover that can cover debug toolbar and block F5
        await page.locator(`${playwright_vscode_ext_1.WORKBENCH} .editor-instance .view-lines`).first().click({ force: true });
        await page.keyboard.press('Escape');
        await page.keyboard.press('F5');
        const sessionEnded = await (0, test_1.expect)(toolbar)
            .not.toBeVisible({ timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        if (sessionEnded)
            break;
    }
    await (0, test_1.expect)(toolbar).not.toBeVisible({ timeout: 45_000 });
};
(0, fixtures_1.test)('Apex Replay Debugger: trace flag, exec anon, replay from log and test class', async ({ page }) => {
    fixtures_1.test.setTimeout(600000);
    const consoleErrors = (0, playwright_vscode_ext_1.setupConsoleMonitoring)(page);
    const networkErrors = (0, playwright_vscode_ext_1.setupNetworkMonitoring)(page);
    const exampleClassContent = [
        'public with sharing class ExampleApexClass {',
        '  public static void SayHello(string name){',
        "    System.debug('Hello, ' + name + '!');",
        '  }',
        '}'
    ].join('\n');
    const exampleTestContent = [
        '@IsTest',
        'public class ExampleApexClassTest {',
        '  @IsTest',
        '  static void validateSayHello() {',
        "    System.debug('Starting validate');",
        "    ExampleApexClass.SayHello('Cody');",
        '',
        "    System.assertEquals(1, 1, 'all good');",
        '  }',
        '}'
    ].join('\n');
    await fixtures_1.test.step('setup minimal org with ExampleApexClass and ExampleApexClassTest', async () => {
        await (0, playwright_vscode_ext_1.setupMinimalOrgAndAuth)(page);
        await (0, playwright_vscode_ext_1.ensureSecondarySideBarHidden)(page);
        await (0, playwright_vscode_ext_1.createApexClass)(page, 'ExampleApexClass', exampleClassContent);
        await (0, playwright_vscode_ext_1.createApexClass)(page, 'ExampleApexClassTest', exampleTestContent);
        await (0, playwright_vscode_ext_1.ensureOutputPanelOpen)(page);
        await (0, playwright_vscode_ext_1.selectOutputChannel)(page, 'Salesforce Metadata');
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_2.default.project_deploy_start_ignore_conflicts_default_org_text);
        await (0, playwright_vscode_ext_1.waitForOutputChannelText)(page, { expectedText: 'Starting metadata deployment', timeout: 30000 });
        await (0, playwright_vscode_ext_1.waitForOutputChannelText)(page, { expectedText: 'Deployed Source', timeout: 120000 });
        await (0, playwright_vscode_ext_1.saveScreenshot)(page, 'setup.classes-created.png');
    });
    await fixtures_1.test.step('wait for CodeLens in test class', async () => {
        // Apex LS must finish indexing before CodeLens appear; CI is slower
        const indexingComplete = page.getByRole('button', { name: /Indexing complete/ });
        await (0, test_1.expect)(indexingComplete).toBeVisible({ timeout: 120000 });
        await (0, playwright_vscode_ext_1.openFileByName)(page, 'ExampleApexClassTest.cls');
        const codelens = page.locator('.codelens-decoration a').filter({ hasText: /Run Test|Debug Test/ });
        await (0, test_1.expect)(codelens.first()).toBeVisible({ timeout: 90000 });
        await (0, playwright_vscode_ext_1.saveScreenshot)(page, 'step.codelens-visible.png');
    });
    await fixtures_1.test.step('create trace flag for current user', async () => {
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_1.default['apexLog.command.traceFlagsCreateForCurrentUser']);
        const statusBar = page.locator(playwright_vscode_ext_1.APEX_TRACE_FLAG_STATUS_BAR).filter({ hasText: /Tracing until/ });
        await (0, test_1.expect)(statusBar).toBeVisible({ timeout: 30000 });
    });
    await fixtures_1.test.step('exec anon with selected text', async () => {
        await (0, playwright_vscode_ext_1.ensureOutputPanelOpen)(page);
        await (0, playwright_vscode_ext_1.selectOutputChannel)(page, 'Salesforce Apex Log');
        await (0, playwright_vscode_ext_1.clearOutputChannel)(page);
        await (0, playwright_vscode_ext_1.openFileByName)(page, 'ExampleApexClassTest.cls');
        // Use Control+G shortcut (no workbench.click) so editor retains focus throughout
        await page.keyboard.press('Control+g');
        await page.locator(playwright_vscode_ext_1.QUICK_INPUT_WIDGET).waitFor({ state: 'visible', timeout: 5000 });
        await page.keyboard.type('6');
        await page.keyboard.press('Enter');
        // Wait for Go to Line prompt to close before selecting (ensures editor has focus)
        await page.locator(playwright_vscode_ext_1.QUICK_INPUT_WIDGET).waitFor({ state: 'hidden', timeout: 5000 });
        // Select line content with keyboard — editor is now focused
        await page.keyboard.press('Home');
        await page.keyboard.press('Shift+End');
        // Open palette via F1 only (no workbench.click) to preserve editorHasSelection for the when condition
        await page.keyboard.press('F1');
        const execSelWidget = page.locator(playwright_vscode_ext_1.QUICK_INPUT_WIDGET);
        await execSelWidget.waitFor({ state: 'visible', timeout: 10000 });
        await page.keyboard.type(package_nls_json_1.default['apexLog.command.executeSelection']);
        await (0, test_1.expect)(execSelWidget.locator(playwright_vscode_ext_1.QUICK_INPUT_LIST_ROW).first()).toBeAttached({ timeout: 10000 });
        await execSelWidget
            .locator(playwright_vscode_ext_1.QUICK_INPUT_LIST_ROW)
            .filter({ hasText: /^SFDX: Execute Anonymous Apex with Editor's Selected Text/ })
            .first()
            .evaluate(el => {
            el.scrollIntoView({ block: 'center', behavior: 'instant' });
            el.click();
        });
        const successNotification = page
            .locator(playwright_vscode_ext_1.NOTIFICATION_LIST_ITEM)
            .filter({ hasText: /executed successfully/i })
            .first();
        await (0, test_1.expect)(successNotification).toBeVisible({ timeout: 30_000 });
        await successNotification.getByRole('button', { name: /Open Log/i }).click();
        const logTab = page.locator('.tab').filter({ hasText: /\.log$/ });
        await (0, test_1.expect)(logTab).toBeVisible({ timeout: 10_000 });
        await (0, playwright_vscode_ext_1.saveScreenshot)(page, 'step.exec-anon-done.png');
    });
    await fixtures_1.test.step('launch replay debugger with current file (log)', async () => {
        // Click the debug.log tab directly to make it the active editor.
        // launchApexReplayDebuggerWithCurrentFile reads activeTextEditor and only calls
        // updateLastOpened (setting LAST_OPENED_LOG_KEY) when the active file is a .log file.
        // Without LAST_OPENED_LOG_KEY, "launch from last log file" opens the native file picker.
        const logTab = page.locator('.tab').filter({ hasText: /debug\.log/ });
        await logTab.click({ force: true });
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_3.default.launch_apex_replay_debugger_with_selected_file);
        await continueDebugSession(page);
    });
    await fixtures_1.test.step('launch replay debugger with last log file', async () => {
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_3.default.launch_from_last_log_file);
        await continueDebugSession(page);
    });
    await fixtures_1.test.step('launch replay debugger with test class', async () => {
        await (0, playwright_vscode_ext_1.openFileByName)(page, 'ExampleApexClassTest.cls');
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_3.default.launch_apex_replay_debugger_with_selected_file);
        await continueDebugSession(page);
    });
    await fixtures_1.test.step('exec anon with editor contents', async () => {
        await (0, playwright_vscode_ext_1.ensureOutputPanelOpen)(page);
        await (0, playwright_vscode_ext_1.selectOutputChannel)(page, 'Salesforce Apex Log');
        await (0, playwright_vscode_ext_1.clearOutputChannel)(page);
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_1.default['apexLog.command.createAnonymousApexScript']);
        await page.locator(playwright_vscode_ext_1.QUICK_INPUT_WIDGET).waitFor({ state: 'visible', timeout: 10000 });
        await page.keyboard.type('TestScript');
        await page.keyboard.press('Enter');
        // Wait for directory QuickPick list rows (InputBox has none; QuickPick has 2 options)
        await (0, playwright_vscode_ext_1.waitForQuickInputFirstOption)(page);
        await page.keyboard.press('Enter');
        // Wait for TestScript.apex to be opened, then ensure it's the active editor
        await page
            .locator('.tab')
            .filter({ hasText: /TestScript\.apex/ })
            .waitFor({ state: 'visible', timeout: 15000 });
        await (0, playwright_vscode_ext_1.openFileByName)(page, 'TestScript.apex');
        // Click the editor to ensure it has focus (not the output panel) —
        // editorLangId must be apex-anon for the executeDocument when clause
        const editorArea = page.locator('.editor-instance .view-lines').first();
        await editorArea.click({ force: true });
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_1.default['apexLog.command.executeDocument']);
        const docSuccessNotification = page
            .locator(playwright_vscode_ext_1.NOTIFICATION_LIST_ITEM)
            .filter({ hasText: /executed successfully/i })
            .first();
        await (0, test_1.expect)(docSuccessNotification).toBeVisible({ timeout: 30_000 });
        await docSuccessNotification.getByRole('button', { name: /Open Log/i }).click();
        const docLogTab = page.locator('.tab').filter({ hasText: /\.log$/ });
        await (0, test_1.expect)(docLogTab).toBeVisible({ timeout: 10_000 });
        await (0, playwright_vscode_ext_1.saveScreenshot)(page, 'step.exec-anon-document-done.png');
    });
    await fixtures_1.test.step('turn off trace flag', async () => {
        await (0, playwright_vscode_ext_1.executeCommandWithCommandPalette)(page, package_nls_json_1.default['apexLog.command.traceFlagsDeleteForCurrentUser']);
        const statusBar = page.locator(playwright_vscode_ext_1.APEX_TRACE_FLAG_STATUS_BAR).filter({ hasText: /No Tracing/ });
        await (0, test_1.expect)(statusBar).toBeVisible({ timeout: 30_000 });
    });
    await (0, playwright_vscode_ext_1.validateNoCriticalErrors)(fixtures_1.test, consoleErrors, networkErrors);
});
//# sourceMappingURL=apexReplayDebugger.desktop.spec.js.map