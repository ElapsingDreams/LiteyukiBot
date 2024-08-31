import{_ as s,c as i,o as e,a4 as a}from"./chunks/framework.BZiUP1E-.js";const y=JSON.parse('{"title":"liteyuki.message.rule","description":"","frontmatter":{"title":"liteyuki.message.rule"},"headers":[],"relativePath":"dev/api/message/rule.md","filePath":"zh/dev/api/message/rule.md","lastUpdated":null}'),t={name:"dev/api/message/rule.md"},n=a('<h1 id="liteyuki-message-rule" tabindex="-1">liteyuki.message.rule <a class="header-anchor" href="#liteyuki-message-rule" aria-label="Permalink to &quot;liteyuki.message.rule&quot;">​</a></h1><p><strong>说明</strong>: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved</p><p>@Time : 2024/8/19 下午10:55 @Author : snowykami @Email : <a href="mailto:snowykami@outlook.com" target="_blank" rel="noreferrer">snowykami@outlook.com</a> @File : rule.py @Software: PyCharm</p><h3 id="var-rulehandlerfunc" tabindex="-1">var <code>RuleHandlerFunc</code> <a class="header-anchor" href="#var-rulehandlerfunc" aria-label="Permalink to &quot;var `RuleHandlerFunc`&quot;">​</a></h3><ul><li><p><strong>说明</strong>: 规则函数签名</p></li><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>默认值</strong>: <code>Callable[[MessageEvent], Coroutine[None, None, bool]]</code></p></li></ul><h3 id="class-rule" tabindex="-1"><em><strong>class</strong></em> <code>Rule</code> <a class="header-anchor" href="#class-rule" aria-label="Permalink to &quot;***class*** `Rule`&quot;">​</a></h3><h4 id="def-init-self-handler-rulehandlerfunc" tabindex="-1"><em><strong>def</strong></em> <code>__init__(self, handler: RuleHandlerFunc)</code> <a class="header-anchor" href="#def-init-self-handler-rulehandlerfunc" aria-label="Permalink to &quot;***def*** `__init__(self, handler: RuleHandlerFunc)`&quot;">​</a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L24" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, handler: RuleHandlerFunc):</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handler</span></span></code></pre></div></details><h4 id="def-or-self-other-rule-rule" tabindex="-1"><em><strong>def</strong></em> <code>__or__(self, other: Rule) -&gt; Rule</code> <a class="header-anchor" href="#def-or-self-other-rule-rule" aria-label="Permalink to &quot;***def*** `__or__(self, other: Rule) -&gt; Rule`&quot;">​</a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L27" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __or__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Rule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Rule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> combined_handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handler(event) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.handler(event)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Rule(combined_handler)</span></span></code></pre></div></details><h4 id="def-and-self-other-rule-rule" tabindex="-1"><em><strong>def</strong></em> <code>__and__(self, other: Rule) -&gt; Rule</code> <a class="header-anchor" href="#def-and-self-other-rule-rule" aria-label="Permalink to &quot;***def*** `__and__(self, other: Rule) -&gt; Rule`&quot;">​</a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L33" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __and__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Rule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Rule&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> combined_handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handler(event) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.handler(event)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Rule(combined_handler)</span></span></code></pre></div></details><h4 id="async-def-call-self-event-messageevent-bool" tabindex="-1"><em><strong>async def</strong></em> <code>__call__(self, event: MessageEvent) -&gt; bool</code> <a class="header-anchor" href="#async-def-call-self-event-messageevent-bool" aria-label="Permalink to &quot;***async def*** `__call__(self, event: MessageEvent) -&gt; bool`&quot;">​</a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L39" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __call__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handler(event)</span></span></code></pre></div></details><p><code>@Rule</code></p><h3 id="async-def-empty-rule-event-messageevent-bool" tabindex="-1"><em><strong>async def</strong></em> <code>empty_rule(event: MessageEvent) -&gt; bool</code> <a class="header-anchor" href="#async-def-empty-rule-event-messageevent-bool" aria-label="Permalink to &quot;***async def*** `empty_rule(event: MessageEvent) -&gt; bool`&quot;">​</a></h3><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L46" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Rule</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> empty_rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span></code></pre></div></details><p><code>@Rule</code></p><h3 id="async-def-is-su-rule-event-messageevent-bool" tabindex="-1"><em><strong>async def</strong></em> <code>is_su_rule(event: MessageEvent) -&gt; bool</code> <a class="header-anchor" href="#async-def-is-su-rule-event-messageevent-bool" aria-label="Permalink to &quot;***async def*** `is_su_rule(event: MessageEvent) -&gt; bool`&quot;">​</a></h3><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/message/rule.py#L50" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Rule</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> is_su_rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event: MessageEvent) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.user_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _superusers</span></span></code></pre></div></details>',20),l=[n];function h(r,p,k,d,o,g){return e(),i("div",null,l)}const c=s(t,[["render",h]]);export{y as __pageData,c as default};
