import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.BZiUP1E-.js";const u=JSON.parse('{"title":"Configurations","description":"","frontmatter":{"title":"Configurations","order":2},"headers":[],"relativePath":"en/deploy/config.md","filePath":"en/deploy/config.md","lastUpdated":1725101868000}'),e={name:"en/deploy/config.md"},n=t(`<h1 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h1><p>LiteyukiBot supports <code>yaml</code>, <code>json</code>, and <code>toml</code> as configuration files, depending on your personal preference.</p><p>When you first run LiteyukiBot, it will generate <code>config.yml</code> and the <code>config</code> directory. You can modify the configuration items and restart LiteyukiBot. In most cases, you only need to modify the <code>superusers</code> and <code>nickname</code> fields.</p><p>When starting, LiteyukiBot will load all configuration files in the project directory <code>config.yml/yaml/json/toml</code> and the <code>config</code> directory. You can create multiple configuration files in the <code>config</code> directory, and LiteyukiBot will automatically merge these configuration files.</p><h2 id="basic-configuration" tabindex="-1"><strong>Basic Configuration</strong> <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;**Basic Configuration**&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NoneBot configuration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nonebot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  command_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Command prefix, if there is no &quot;&quot; empty command header, please enable alconna_use_command_start to ensure alconna parsing is normal</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0.0.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Listening address, default is local, if you want to receive external requests, please fill in</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20216</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Binding port</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nickname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;liteyuki&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Bot nickname list</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  superusers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1919810&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Superuser list</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">liteyuki</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  log_level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Log level</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  log_icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Whether to display the log level icon (some console fonts are not available)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  auto_report</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Whether to automatically report problems to Liteyuki server</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  auto_update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Whether to automatically update Liteyuki, check for updates at 4 am every day</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Liteyuki plugin list</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  plugin_dirs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Liteyuki plugin directory list</span></span></code></pre></div><h2 id="other-configurations" tabindex="-1"><strong>Other configurations</strong> <a class="header-anchor" href="#other-configurations" aria-label="Permalink to &quot;**Other configurations**&quot;">​</a></h2><p>The following is the default value. If you need to customize it, please add it manually</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Advanced configuration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nonebot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  onebot_access_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # OneBot access token</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default_language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh-CN&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Default language</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  alconna_auto_completion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # alconna auto completion</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  safe_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Safe mode, if true, the bot will not load any plugins</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # other nonebot configurations</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom_config_1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom_value1&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom_config_2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom_value2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># development configuration</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">liteyuki</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  allow_update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Whether to allow Liteyuki to update</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Debug mode, if true, Liteyuki will output more detailed logs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  dev_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # development mode, if true, Liteyuki will load all plugins in the development directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">...</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="example-configuration-of-onebot-implementation-side-connected-to-nonebot" tabindex="-1"><strong>Example: Configuration of OneBot implementation side connected to NoneBot</strong> <a class="header-anchor" href="#example-configuration-of-onebot-implementation-side-connected-to-nonebot" aria-label="Permalink to &quot;**Example: Configuration of OneBot implementation side connected to NoneBot**&quot;">​</a></h2><p>In production environments, it is recommended to use reverse WebSocket The fields provided by different implementation sides may be different, but basically the same. Here is a reference value</p><table tabindex="0"><thead><tr><th>Fields</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>protocol</td><td>Reverse WebSocket</td><td>Liteyuki-NoneBot as server</td></tr><tr><td>address</td><td>ws://127.0.0.1:20216/onebot/v11/ws</td><td>The address depends on the configuration file, the default is \`</td></tr><tr><td>AccessToken</td><td><code>&quot;&quot;</code></td><td>If you have configured <code>AccessToken</code> for Liteyuki, please fill in the same value here</td></tr></tbody></table><ul><li>To use other communication methods, please visit <a href="https://onebot.adapters.nonebot.dev/" target="_blank" rel="noreferrer">OneBot Adapter</a> for detailed information</li></ul><h2 id="other" tabindex="-1"><strong>Other</strong> <a class="header-anchor" href="#other" aria-label="Permalink to &quot;**Other**&quot;">​</a></h2><ul><li>Liteyuki is not limited to the OneBot adapter and NoneBot2. You can use any adapter supported by NoneBot2 or use the Liteyuki message delivery plugin</li></ul>`,16),l=[n];function o(h,p,k,r,d,c){return a(),i("div",null,l)}const y=s(e,[["render",o]]);export{u as __pageData,y as default};
