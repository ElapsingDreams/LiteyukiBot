import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BZiUP1E-.js";const F=JSON.parse('{"title":"轻雪函数","description":"","frontmatter":{"title":"轻雪函数","order":2},"headers":[],"relativePath":"en/dev/lyfunc.md","filePath":"en/dev/lyfunc.md","lastUpdated":1725102337000}'),t={name:"en/dev/lyfunc.md"},l=n(`<h1 id="轻雪函数" tabindex="-1"><strong>轻雪函数</strong> <a class="header-anchor" href="#轻雪函数" aria-label="Permalink to &quot;**轻雪函数**&quot;">​</a></h1><p>轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction，属于资源包的一部分，但需单独起篇幅.</p><h3 id="函数文件" tabindex="-1"><strong>函数文件</strong> <a class="header-anchor" href="#函数文件" aria-label="Permalink to &quot;**函数文件**&quot;">​</a></h3><p>函数文件放在资源包的<code>functions</code>目录下，文件名以<code>.mcfunction</code> <code>.lyfunction</code> <code>.lyf</code>结尾，例如<code>test.mcfunction</code>，文件内容为一系列的命令，每行一个命令，支持单行注释<code>#</code>(编辑时的语法高亮可采取<code>shell</code>格式)，例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在发信器输出&quot;hello world&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你想同时输出多行内容可以尝试换行符(Python格式)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Liteyuki</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bot</span></span></code></pre></div><p>也支持句末注释，例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 输出&quot;hello world&quot;</span></span></code></pre></div><h3 id="命令文档" tabindex="-1"><strong>命令文档</strong> <a class="header-anchor" href="#命令文档" aria-label="Permalink to &quot;**命令文档**&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">var1=value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [var2=value2] ...  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在设备上执行命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">api</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">api_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [var=value...]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用Bot API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;func_name&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> # 调用函数，可递归</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 异步等待，单位s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用新的task执行命令，即不等待</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 结束函数关键字，包括子task</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">await</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 等待所有异步任务结束，若函数中启动了其他task，需要在最后调用，否则task对象会被销毁</span></span></code></pre></div><h4 id="示例" tabindex="-1"><strong>示例</strong> <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;**示例**&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 疯狂戳好友</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 /function poke user_id=123456 执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每隔0.2s戳两次，无限戳，会触发最大递归深度限制</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若要戳20s后停止，则需要删除await，添加sleep 20和end</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> friend_poke</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user_id=user_id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> friend_poke</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user_id=user_id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> poke</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">await</span></span></code></pre></div><h3 id="api" tabindex="-1"><strong>API</strong> <a class="header-anchor" href="#api" aria-label="Permalink to &quot;**API**&quot;">​</a></h3><p>理论上所有基于onebotv11的api都可调用，不同Adapter api也有差别.</p><p><a href="https://283375.github.io/onebot_v11_vitepress/api/index.html" target="_blank" rel="noreferrer">Onebot v11 API文档</a></p><h3 id="结束关键字" tabindex="-1"><strong>结束关键字</strong> <a class="header-anchor" href="#结束关键字" aria-label="Permalink to &quot;**结束关键字**&quot;">​</a></h3><p>由于LiteyukiBot基于异步运行, 所以在编写lyfunction时也要注意异步的调用，避免出现&quot;单线程走到底&quot;的情况是效率提升的关键.</p><p><code>await</code> 异步任务结束关键字，用于结束当前已完成function的执行</p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>但若出现非单function的情况，有一个task任务没有完成而await被执行了，那么当前所有函数包的task都会被截停销毁</p></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>编写轻雪函数推荐你使用VS Code插件<a href="https://github.com/LiteyukiStudio/lyfunctionTextmate" target="_blank" rel="noreferrer">Liteyuki Function</a>实现语法高亮</p></div>`,19),e=[l];function h(p,k,d,r,o,c){return a(),i("div",null,e)}const y=s(t,[["render",h]]);export{F as __pageData,y as default};
