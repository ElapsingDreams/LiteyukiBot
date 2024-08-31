import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.BZiUP1E-.js";const E=JSON.parse('{"title":"liteyuki.dev.plugin","description":"","frontmatter":{"title":"liteyuki.dev.plugin"},"headers":[],"relativePath":"en/dev/api/dev/plugin.md","filePath":"en/dev/api/dev/plugin.md","lastUpdated":1725101868000}'),n={name:"en/dev/api/dev/plugin.md"},e=t(`<h1 id="liteyuki-dev-plugin" tabindex="-1">liteyuki.dev.plugin <a class="header-anchor" href="#liteyuki-dev-plugin" aria-label="Permalink to &quot;liteyuki.dev.plugin&quot;">​</a></h1><p><strong>Description</strong>: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved</p><p>@Time : 2024/8/18 上午5:04 @Author : snowykami @Email : <a href="mailto:snowykami@outlook.com" target="_blank" rel="noreferrer">snowykami@outlook.com</a> @File : plugin.py @Software: PyCharm</p><h3 id="def-run-plugins-module-path-str-path" tabindex="-1"><em><strong>def</strong></em> <code>run_plugins(*module_path: str | Path)</code> <a class="header-anchor" href="#def-run-plugins-module-path-str-path" aria-label="Permalink to &quot;***def*** \`run_plugins(*module_path: str | Path)\`&quot;">​</a></h3><p><strong>Description</strong>: 运行插件，无需手动初始化bot</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>module_path: 插件路径，参考<code>liteyuki.load_plugin</code>的函数签名</li></ul></blockquote><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/dev/plugin.py#L17" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run_plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module_path: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Path):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    运行插件，无需手动初始化bot</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Args:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        module_path: 插件路径，参考\`liteyuki.load_plugin\`的函数签名</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cfg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> load_config_in_default()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cfg.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;liteyuki.plugins&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins.extend(module_path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cfg[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;liteyuki.plugins&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugins</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LiteyukiBot(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cfg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bot.run()</span></span></code></pre></div></details>`,8),l=[e];function p(h,k,r,o,d,u){return a(),s("div",null,l)}const c=i(n,[["render",p]]);export{E as __pageData,c as default};
