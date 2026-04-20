# We’re Now Doing Pre Releases!

Do you like living on the edge and trying new features and bug fixes before our customers do? You know you do. You can help us by testing pre-release versions of Agentforce Vibes before they ship. It’s easy to do, doesn't cost a dime and you’ll help make Agentforce Vibes better for the entire developer community.

## Why use the pre-release?

You’ll get early access to new capabilities, improvements, and fixes. Plus, your feedback helps us catch issues and help us ship higher-quality releases.

## Versioning Scheme

**Pre Release**: Odd-numbered weekly releases (for example, v1.11)

**Stable Release**: Even-numbered weekly releases (for example, v1.10)

Features first appear in the Pre Release and roll into the Stable Release the following week.

# 3.32.0 (Stable), 3.31.0 (Pre-release)

## Added

- Added grace period notice for users with existing free Agentforce Vibes Agentic Chat usage (grace period ends 5/31).
- Added documentation link to React tile on welcome page for enabling React Beta org preference.
- Added telemetry tracking to monitor React/web app opt-in adoption rates.

## Fixed

- Fixed MCP server status widget to show accurate active/total server counts
- Fixed restoring of edited Salesforce skill files on restart
- Fixed platform-hosted MCP server URLs to use environment-specific subdomains for testing
- Fixed Scratch Orgs to prevent fallback to Flex Credits when Premium model limit is reached when using unmetered Agentforce Vibes

# 3.30.1 (Stable)

## Fixed

- The Pro model in Agentforce Vibes now uses Claude-4.5-Sonnet for chat and interactive experiences. Once you hit your monthly Pro usage limit, it automatically switches to the Core model (GPT-5 mini) for the rest of the billing cycle. See the [documentation](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html) for more details on usage limits.

# 3.30.0 (Stable), 3.29.0 (Pre-release)

## Added

- Hosted MCP servers are now enabled by default in the Agentforce Vibes IDE.
- Data masking limit is now 115k.
- We added a Working/Thinking indicator during agent processing. This provides visual confirmation that the agent is processing a request.

## Fixed

- We enhanced the Welcome Page with a new serializer and background placement. The page now stays open after a prompt is sent, allowing for a more seamless onboarding flow.
- We made improvements to the Salesforce hosted MCP server UX with a lock icon, contextual links, and a retry button.

# 3.28.0 (Stable), 3.27.0 (Pre-release)

## Added

- We added a VS Code setting "Enable Auto Update Skills" to update Salesforce skills to their latest version on extension startup.
- We also introduced a new command, "Agentforce: Refresh Salesforce Skills", to update Salesforce skills to their latest version.

## Fixed

- Resolved an API error where Claude models were returning “Invalid API response” for certain requests.

# 3.26.0 (Stable), 3.25.0 (Pre-release)

## Added

- We introduced a new welcome page in Agentforce Vibes, laying the foundation for upcoming interactive experiences to help you get started with building apps and agents.
- Agentforce Vibes now supports Salesforce-hosted MCP servers, making it easier to extend your workflows with additional tools and capabilities.
- Prompts are now enhanced with Salesforce Skills, which activate automatically based on context. You can view and manage available Skills in the Skills panel.

## Fixed

- We fixed an issue where long-running terminal commands could cause tasks to hang.
- We fixed an issue where parallel tool calls could fail or return invalid API responses for Claude models.

# 3.24.0 (Stable), 3.23.0 (Pre-release)

## Added

- We have updated our Core models for Inline Autocomplete and Agentic Chat. Please upgrade to the latest version of Agentforce Vibes as soon as possible to ensure all features remain fully functional. See [model usage and choice limits](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html#model-usage-and-choice-limits) for updated rate limits and details.

# 3.22.0 (Stable), 3.21.0 (Pre-release)

## Fixed

- We fixed a bug where API errors did not include error details

# 3.20.1 (Hot fix)

## Fixed

- Fixed our fallback request mechanism

# 3.20.0 (Stable), 3.19.0 (Pre-release)

## Added

- Abilities are now generally available and enabled by default. Abilities automatically selects the relevant MCP tools for a task, improving accuracy while reducing unnecessary context and token usage.

# 3.18.0 (Stable), 3.17.0 (Pre-release)

## Added

- We added support for skills, re-usable custom instruction sets that extend the capabilities of Agentforce Vibes. Skills are enabled by default. We'd love for you to try them out and give us your feedback!

## Fixed

- We fixed an incorrect message for off-topic errors.
- We fixed a bug causing premature auto-compacting of tasks.
- We fixed a bug that paused a chat after creating a plan in Act mode.
- We fixed SObject reference resolution in chat messages.

# 3.15.0 (Pre-release)

## Added

- We added a new rules file for coding an agent's Agent Script file.

# 3.14.0 (Stable), 3.13.0 (Pre-release)

## Added

- Multimodal support is now live - We added support for including files and images as context in tasks for richer, more accurate responses.
- You can now use [AGENTS.md](https://agents.md/) in rules to clarify agent behavior and expectations.
- We have simplified the task header and auto approve panel
- We made some changes under the hood.

# 3.12.1 (Stable)

## Fixed

- We fixed telemetry to report correct generated lines of code.

# 3.12.0 (Stable), 3.11.0 (Pre-release)

## Added

- We added Markdown support to the Focus Chain UI.
- We improved the user-facing message shown when hitting the context window limit with PII enabled in the org.
- We made security enhancements.

## Fixed

- We disabled the noisy toast notification shown on every reload for DX MCP server enablement.

# 3.9.0 (Pre-release)

## Added

- We added support for manual compaction, giving users greater control over their context and token usage. See [doc for more details](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/manual-compact.html).
- We updated the task header and focus chain UI design.
- We renamed the MCP tab from Installed to Configure.

# 3.8.0 (Stable), 3.7.0 (Pre-release)

## Added

- We made some security enhancements.

# 3.6.0 (Stable), 3.5.0 (Pre-release)

## Added

- LWC and Apex rules are now turned on by default
- Added automatic approval for read-only MCP tools for Salesforce DX MCP server, eliminating unnecessary approval prompts while maintaining user approval for write operations.
- Several improvements including security fixes to the Safe commands feature.

## Fixed

- Export task history has been fixed on Agentforce Vibes IDE

# 3.3.1

## Fixed

- We fixed some security issues.

# 3.3.0

## Added

- We introduced `/deep-planning`, a four-step planning flow that scans your codebase, clarifies requirements, generates an implementation plan, and launches a new task pre-loaded with all necessary context.
- We introduced `Focus Chain`, which maintains a live todo list and tracks progress throughout long tasks. This helps Agentforce manage context across resets and remain focused on multi-step workflows.
- We updated the auto-approve toggle behavior so it no longer triggers MCP server reconnections. This eliminates related race conditions and unnecessary UI re-renders, improving responsiveness and reducing delay.
- We made some updates to the MCP server Enable/Disable UX.

# 3.2.0

## Added

- We added support for user-defined safe terminal commands. Safe commands run automatically, with approval prompts for potentially unsafe cases.
- We added a safeguard for sensitive files: all write operations now require Human-in-the-Loop (HITL) review before acceptance, regardless of auto-approval settings.

## Fixed

- We fixed an issue where fallback requests were not routed through the topic classifier check on the server side.
- We fixed a bug where default rules were not restored on extension reinstall. As a result of this, we also removed the Agentforce: Reset A4D Default Rules command.
- We improved MCP server handling—only servers with modified configurations are reconnected. Servers with unchanged configs stay connected without interruption.
- We removed the History panel to simplify the interface.

# 3.1.0

## Added

- We’re catching good vibes—we’ve rebranded! Agentforce for Developers has leveled up into Agentforce Vibes, because building with agents should feel good. Dev Agent has also been renamed to Agentforce.
- The UX now clearly shows when you’ve switched from the Pro model tier to the Core model, and when your token limits will reset.

## Fixed

- Agentforce now shows the correct error message if you’re not signed into a Salesforce org.

# 3.0.1

- 🚀 Dev Agent GA

  We’re excited to announce the General Availability of Dev Agent, a dramatic step forward from Dev Assistant into agentic chat powered by MCP servers and tools. With Dev Agent, you can go beyond simple prompts and suggestions—Dev Agent can plan, reason, and take multi-step actions to help you build, troubleshoot, and optimize with more autonomy than ever before.
  This release represents a major evolution in the developer experience and sets the stage for even more powerful workflows.
  :point_right: Learn more in the Dev Agent Overview

# 2.102.0

## Added

- Dev Agent (Developer Preview)

  🚀🚀 We’re excited to announce Developer Preview of Dev Agent, a major evolution of Dev Assistant! Dev Agent brings agentic capabilities powered by MCP servers and tools, enabling the assistant to take multistep actions and help automate your development workflows like never before. Check out our [docs](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-overview.html) here. We can’t wait for you to try it and share feedback!

- The Inline Autocomplete feature now runs on the SFR Model, delivering faster, higher-quality code suggestions and more relevant completions.

# 2.12.0

## Added

- The default model for Dev Assistant is now GPT-4o mini
- We made some changes under the hood.

# 2.11.0

## Added

- 🚀🚀 We’re excited to announce multi-model support across select features.
  - Some features now leverage premium third-party models hosted securely on platforms like AWS Bedrock, giving users access to high-performance, premium AI capabilities.
  - Premium models are available up to a specified token or request limit. After that, the system automatically falls back to Salesforce models to ensure uninterrupted performance.

# 2.10.1

## Added

- We improved the user experience for references. We did this by introducing dynamic file icons, enhanced file reference display, and refined styling.
- The Apex Test Case Generation form now resets each time you upload a new Apex file. This makes the form more consistent.
- We made some changes under the hood.

# 2.10.0

## Added

- Custom rules are now incorporated into prompts for both `/document` and `/test` commands.

## Fixed

- Resolved an issue in Apex test case generation where classes located in subdirectories under classes/ were not being detected.
- Optimize LWC: Added a notification for cases where no optimizations are available ensuring only files with actual changes are displayed.
- Test case generation UI: Improved the Picker component’s styling and functionality.

# 2.9.0

## Added

- 🚀🚀 Exciting news for our Developers! We’ve released yet another new feature - User-specified context in Dev Assistant. This feature allows you to add specific Apex or Lightning Web Component (LWC) files, Apex methods, selected code, and local metadata to your chat sessions. Use this feature to get more precise and contextually relevant responses from Dev Assistant. We hope you :heart: this update to the Dev Assistant you’ve grown to know and love.

- AI custom rules now support <code>.trigger</code> files. You can now include **Applies to: <code>\*\*/\*.trigger</code>** in your custom rules markdown files.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 2.8.0

## Added

- We now collect telemetry on AI custom rules that are incorrectly excluded from requests. This data helps us improve the product.
- We made some changes under the hood.

# 2.7.0

## Added

🚀🚀 Exciting news for our Developers! We’re thrilled to announce the release of a powerful set of new features in Agentforce for Developers. Check out our docs to learn more about these features.

- The new AI Custom Rules feature allows users to define rules that shape how AI-generated code should be structured and behave, giving you greater control over how the LLM writes code.
- The Optimize LWC feature (currently in Developer Preview) introduces a new Mobile Offline agent. This agent analyzes and updates LWC code to ensure it aligns with mobile optimization guidelines.

# 2.6.0

## Added

- We added a user-friendly error message notification in the Apex Test Case Generation form for when test generations fail.

## Fixed

- We resolved an issue where optimizing certain LWC components caused an error.

# 2.5.0

## Added

- We made some changes under the hood.

## Fixed

- We resolved an issue where generating Jest tests or optimizing certain LWC components caused an error.

# 2.4.0

## Added

- We made some changes under the hood.

## Fixed

- We added RAG-based context for SOQL prompts to improve accuracy. Previously, prompts with SOQL didn’t include context, leading to inconsistent response generation in complex use cases.

# 2.3.0

## Added

- Form selections for the test case generation agent are now preserved when you switch between Apex and LWC tests. This means you won't have to reselect components each time, making your testing process more efficient and seamless.
- We made some changes under the hood.

## Fixed

- We fixed an issue that caused improper caching of the vector database after RAG indexing was completed.

# 2.2.0

## Added

- With its elevated presence in the Salesforce Extension Pack, Agentforce for Developers is now a core part of the Salesforce developer experience. This change improves discoverability, making it easier for developers to find and install Agentforce for Developers as part of their workflow.
- The Code Analyzer VS Code (Beta) extension now seamlessly integrates with Agentforce for Developers by offering suggested code quick fixes for a set of PMD violations. To view the list of PMD rules that can currently be fixed this way, run this command from the terminal:

```
sf code-analyzer rules --rule-selector Recommended:pmd:Security:Apex --rule-selector Recommended:pmd:ErrorProne:Apex
```

For more information, see [Fix Your Code Using Agentforce for Developers](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/analyze-vscode.html#fix-your-code-using-agentforce-for-developers).

- We increased the input token limit for Dev Assistant and Apex test case generation from 7K to 10K. The increased input token limit will help add more context to requests, and generate better quality responses.

## Fixed

- The latest Salesforce patch release fixed an issue with Multi-Factor Authentication (MFA) that sometimes caused access issues for Agentforce for Developers in a Salesforce org.

# 2.1.1

## Added

- We made some changes under the hood.

# 2.1.0

## Added

- The diff view now clears after you accept or discard a generation. When you accept a generation, your updated file automatically replaces the diff view in the editor, making for a more seamless user experience.
- The `Agentforce: Generate Code` command now redirects you to the Dev Assistant so that you can easily take advantage of all the extras that Dev Assistant has to offer. See Chat with Dev Assistant to learn more.
- We made some changes under the hood.

# 2.0.1

🚀🚀 Exciting news for our Developers! We’re thrilled to announce the release of a powerful set of new features in Agentforce for Developers. We’ve upped our game and made it easier than ever to build and optimize Lightning web components. This release introduces a brand new **Agents panel** in the Activity bar that houses these new features:

- **Apex and LWC Test Case Generation**: Automatically generate Jest tests for your LWC components using our new AI agent. The clean, easy to use UI experience that includes a new diff view, is also available for Apex test case generation.
- **Optimize your LWC Components (Dev Preview)**: Boost your components' **accessibility** with AI recommendations aligned with select **WCAG Level accessibility standards**. The agent can also assist in resolving **To-Do comments** directly from your component code. This feature is currently in **developer preview** and very easy to turn on. We're eager to hear your feedback to help us improve!

Give these new features a try and let us know what you think!

# 1.13.0

### Features

- We made some changes under the hood.

# 1.12.0

### Features

- We updated the chat streaming process to handle larger chunks returned by XGen-Code, our custom LLM. Previously, data was processed one character at a time, causing choppy chat output due to updates being sent only every 20 chunks. Now, the webview is updated on every chunk for a more responsive experience.
- We made some changes under the hood.

# 1.11.0

### Features

- We made some changes under the hood.

# 1.10.0

## Fixed

- We've fixed an issue that was causing incorrect generations in the /document command.

## Added

- We made some changes under the hood.

# 1.9.0

## Added

- We revamped our icons—check out the sleek new look in the Dev Assistant and status bar! Spot the upgrade?
- We made some changes under the hood.

# 1.8.0

## Added

- We've made improvements to the system prompts for LWC files. This means you'll get better chat responses when you're working with an LWC file open
- We removed a setting that allowed users to choose between long and short autocompletions. Now you'll always have the best autocompletion experience, based on your context.

# 1.7.1

## Fixed

- We fixed a bug where recent user message history was not being sent to the LLM.
- We made some changes under the hood.

# 1.7.0

## Added

- We made some changes under the hood.

# 1.6.0

## Added

- We made some changes under the hood.

## Fixed

- We made improvements to our inline auto complete feature. Now you’ll get more stable suggestions as you type.
- We made some changes under the hood.

# 1.5.0

## Added

- We made some changes under the hood.

# 1.4.1

## Fixed

- We made some changes under the hood.

# 1.4.0

## Added

- We made some changes under the hood.

## Fixed

- We made improvements to our inline auto complete feature. Now you’ll get more helpful and stable suggestions as you type.
- We made some changes under the hood.

# 1.3.0

## Added

- Now you can enable or disable retrieval augmented generation (RAG) in settings. With RAG on, the responses you receive from Dev Assistant will be more relevant.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 1.2.0

## Added

- A Salesforce admin can now disable Agentforce for Developers in a Salesforce org. If Agentforce for Developers is disabled in your default org, it’ll now also be disabled in the extension.

## Fixed

- We made some changes under the hood.

# 1.1.0

## Added

- Check out the new icon state in the status bar to see when inline autocompletions are paused. We pause autocompletions when we detect idle time in the editor. Paused autocompletions are easy to restart.

# 1.0.1

## Added

- Say hello to Agentforce for Developers. This extension's brand has a new identity! We've revamped the commands, views, and icons to match the exciting new branding.
- To ensure that our RAG model has all the context it needs about your workspace, we now remind you to run SFDX:Refresh SObject Definitions.

## Fixed

- We made some changes under the hood.

# 0.61.0

🚀🚀 We’re thrilled to announce the general availability of Einstein for Developers, our generative AI tool, powered by our custom Salesforce LLMs, CodeGen2.5 and xGen-Code.🚀🚀

Use Einstein for Developers, your helpful coding assistant in Visual Studio Code and Code Builder as you work on Apex and Lightning Web Component (LWC) files in your Salesforce DX project. Here’s an overview of features.

**Einstein Dev Assistant**: Code with ease with the help of your Dev Assistant right beside you. Get started with code generation and Salesforce development by asking Einstein for help. With easy-to-use slash commands, you can also focus on specific tasks like understanding new code and improving your code documentation.

**Command Palette**: Use the **Einstein: Generate Code** command in the VS Code Command Palette to enter a question about what you want to build. Einstein responds with Apex code suggestions right in your editor.

**Inline Auto Completions**: As you type, Einstein for Developers can suggest code completions, without any interruptions to your workflow. Easily pick the suggestion that works for you. Use this feature in Apex and LWC (JavaScript, CSS, and HTML) files.

**Test Case Generation for Apex**: Use Einstein for Developers to easily create unit test cases for your Apex methods. Quickly get to required Apex test coverage and get your code ready for deployment.

## Key Product Links

- [Documentation](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html)
- [FAQ](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-faq.html)
- [GitHub](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues) repo for logging issues.
- [Terms of Use](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-termsofuse.html)

We look forward to seeing how Einstein for Developers will power your Salesforce Development. Thank you for being a part of our journey!

# 0.60.0

Meet Einstein Dev Assistant, the latest addition to Einstein for Developers 🤖 🎉. This chat experience lets you ask Einstein questions about your local files and explain your existing code. With the ability to iterate over your responses, Einstein Dev Assistant will make you more productive than ever.

# 0.59.0

## Fixed

- We made some changes under the hood.

# 0.58.0

## Fixed

- We made some changes under the hood.

# 0.57.0

### Features

- No need to guess if the magic ✨ is happening. We've added a handy setting that’ll show you when an autocomplete is in progress.

## Fixed

- We made some changes under the hood.

# 0.56.0

## Added

- Our inline autocompletion feature just got a whole lot better. Now, you can easily find previous generations by simply placing your cursor back in the same location. We’ll show you up to 5 previous generations, making it easy to find the perfect completion.

## Fixed

- We made some changes under the hood.

# 0.55.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.54.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.53.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.52.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.51.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.50.0

## Added

- The Einstein for Developers extension is now bundled! This should result in a significantly faster startup time. 🚀
- We updated the Einstein for Developers sidebar introduction text to direct users to our Apex Unit Test Case Generation feature.

## Fixed

- We added a missing description to an icon.

# 0.49.0

## Added

🚀 We’re thrilled to announce that Einstein for Developers (Beta) is now a part of the [Salesforce Expanded Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-expanded)! 🚀
Here’s what you can expect with this change:

- Access to powerful generative AI tooling that is grounded in your org’s data, and is backed by the promise of Salesforce’s Trust Layer. See [Additional Terms of Use](https://developer.salesforce.com/tools/vscode/en/einstein/einstein-termsofuse) for information.
- Seamless updating of extension versions. Weekly extension releases include new features and enhancements that we continue to make to Einstein for Developers!
- Einstein for Developers is enabled by default in our VS Code desktop application. Enable it in Code Builder in minutes.

We’re excited that we’ve made it easier for you to give Einstein for Developers a spin, and we hope you’ll give it a try. We’d love your [feedback](https://developer.salesforce.com/tools/vscode/en/einstein/einstein-feedback) ! 📝

### Fixed

- We fixed an issue where the History tab in the output panel stole focus when the extension was first initialized

# 0.48.0

## Added

- We made some changes under the hood.

# 0.47.0

## Added

- We added a new setting that allows users to select the length of inline autocompletions.
- We made some changes under the hood.

## Fixed

- We fixed an issue with file creation during Test Case Generation so that all Salesforce CLI extension versions are now supported. ([#72](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/72))

# 0.46.0

## Added

- We made some changes under the hood.

# 0.45.1

## Fixed

- We fixed an issue with the change log not rendering correctly.

# 0.45.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.44.0

## Fixed

- We fixed an issue where launching VS Code and opening a non `sfdx` project created a `.sfdx` sub-folder in the project.

# 0.43.2

## Fixed

- We fixed a bug that caused some Einstein for Developers features to be hidden when used with the most recent version of the Core CLI extension (v60.7.0).

# 0.43.1

## Added

- We made some changes under the hood.

# 0.43.0

## Added

- We improved the Einstein for Developers sidebar experience by adding a more detailed and helpful greeting. This includes links to a walkthrough and product documentation.

## Fixed

- We fixed an issue with the Einstein for Developers icon, where the extension's enabled state was not accurately reflected when users manually triggered completions.
- We made some changes under the hood.

# 0.42.0

## Features

- We updated some setting names in an effort to make their purpose clearer to understand. Values for these settings have reverted to default as a result of this update. Go to **Settings** and search for "Einstein for Developers" and make any settings updates you need.

## Fixed

- We made some changes under the hood.

# 0.41.0

## Added

- The Inline autocomplete feature now includes support for HTML files for LWC.

# 0.40.0 Major Release Update!

This release of Einstein for Developers (Beta) includes some spiffy new items that power up our custom generative AI tool. :tada: :tada: Use these features to make your productivity take a major leap forward. The extension is now enabled by default across all Salesforce orgs.

- **Inline Autocomplete for Apex and LWC**: Get multiple inline suggestions, as you code. Easily pick the one that works for you. This new feature is available in Apex and LWC (Javascript and CSS) files.
- **Test Case Generation for Apex**: Use Einstein for Developers to quickly generate unit tests for your Apex methods.
- **Update to Data Usage Policy**: Einstein for Developers no longer uses customer data to train our LLM, CodeGen.

Some other changes we’ve made to help you with your tasks include:

- An update to status icon that now suggests actions when you click on it, and also keeps you even more informed about the state of affairs.
- A brand new **Einstein for Developers Walkthrough** so that you can learn about these new features!

We hope you have fun with the features! :tada:

# 0.39.0

## Added

- We made some changes so that clicking the Einstein icon in the status bar now opens the command palette from where you can choose helpful Einstein for Developers commands.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.38.0

## Fixed

- We made some changes under the hood.

# 0.37.0

## Fixed

- Fixed an issue that sometimes prevented the Einstein for Developers extension from activating in Code Builder. ([#370](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/370))
- We made some changes under the hood.

## Added

- Pressing enter in the side bar now triggers the ask button automatically. ([#358](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/358)), closes [#278](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/278)

# 0.36.0

## Fixed

- We made some changes under the hood.

# 0.35.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.34.0

## Fixed

- We made some changes under the hood.

# 0.33.0

## Added

- We made some changes under the hood.

## Fixed

- We fixed a bug so that you can now copy prompts and generated responses from the History and Feedback panel. Thank you [abrantes23](https://github.com/abrantes23) for bringing the [issue](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/10) to our attention. We hope we made your job just a little easier.

# 0.32.0

## Added

- We added some spiffy syntax highlighting to responses so that the generated code block looks exactly like it would in your code editor.

## Fixed

- We made token usage optimal by estimating in advance how many tokens a prompt would use, while also increasing the token budget. Response truncation incidents are now greatly reduced as a result of these updates. And you’re no longer wasting those precious tokens. Win-win much?
- We fixed an issue with single line generations not wrapping around columns. Responses are now formatted correctly in the History & Feedback tab.
- We fixed some issues so that both engineered prompts and Apex code responses are better formatted.

# 0.31.0

## Added

- We updated the minimum required version of the @salesforce/core library to 59.9.0
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.
- We fixed an issue with incorrect handling of the user prompt so that it is now correctly added at the end of the printed engineered prompt in logs.

# 0.30.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.
- We fixed an issue with incorrect handling of the situation when the Einstein for Developers is disabled in an org while it’s active.

# 0.29.0

## Added

- We made some changes under the hood.

# 0.28.0

## Added

- Einstein icon now has an updated look.
- You can now specify any apex files in your workspace in your prompts with the suffix .cls. Our engineered prompts can now extract the outlines of these files and use the information as context to provide better grounding.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.27.1

## Added

- We made some changes under the hood.

# 0.26.3

## Added

- Einstein for Developers can now correctly parse custom metadata when it is a part of a prompt and uses the `__mdt` suffix. The metadata added to a prompt in this way is automatically included into the context to ground generations. Make sure to run `SFDX:Refresh SObject Definitions` to pull custom metadata from your org into the project. Then build prompts using the custom metadata and associated suffix. Enjoy building those cool prompts!
- We made some changes under the hood.

# 0.24.2

## Added

- You can now reference multiple custom objects in your prompt, making code generations more aware of your project's metadata. Run SFDX:Refresh SObjects Definitions to gather org metadata into your project. Then build your prompt using as many custom objects in the metadata as you want. Enjoy building those awesome prompts!
- You can now use the Esc key to clear code suggestions.

# 0.23.1

### Fixed

- We updated these keyboard shortcuts--
  - Use `ctrl+enter` / `cmd+enter` to accept a code suggestion that is generated in your Apex file when you run the `Einstein: Generate Code` command from that file.
  - Use `ctrl+shift+r` / `cmd+shift+r` to open the `Einstein: Generate Code` command in the command palette. You must have an Apex file in focus to use this shortcut.

- We increased the character limit for the text you can enter in the Einstein sidebar. Now you don’t have to worry about running out of words when you’re crafting your prompts. We know you have a lot of questions. Ask away!

# 0.22.1

## Fixed

- We made an update so that a text response is not rendered as code.
- We made some changes under the hood.

## Added

- We've added org context information to items the prompt history panel. Now the panel only displays prompt history information for the default org.

# 0.21.1

## Fixed

- We now let you know when your prompt is too long for us to handle!
- We also let you know when your CLI version needs updating.
- We fixed an issue where the feedback in the panel would get out of sync with feedback in the history. Thank you [Jeff Kranz](https://github.com/jkranz-rk) for reporting the [issue](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/16).
- We made some changes under the hood.

## Added

- We made an update to telemetry reporting.

# 0.19.0 Open Beta Release

We released a brand new Einstein for Developers (Beta) extension. This extension used with the Salesforce Extension Pack, powers up your Salesforce development environment with custom generative AI. Use the extension to generate boilerplate Apex code from natural language instructions in a sidebar, so you can work with your editor and the tool side by side, without any interruptions to your workflow.

# 0.1.0 - 0.18.0

These releases were limited to the Einstein for Developers closed pilot.
