import{_ as e,o as a,c as t,V as o}from"./chunks/framework.d3b95951.js";const m=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1689483761000}'),h={name:"guide/getting-started.md"},r=o('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>欢迎使用 ChatHub。在本章节中，我们将教您如何安装和配置 ChatHub，让您能快速地体验与 AI 模型的对话。</p><h2 id="安装-koishi" tabindex="-1">安装 Koishi <a class="header-anchor" href="#安装-koishi" aria-label="Permalink to &quot;安装 Koishi&quot;">​</a></h2><p>在使用 ChatHub 之前，您需要确保 Node.js 版本在 v18 以上。</p><p>您可以使用 <code>node -v</code> 命令检查 Node.js 版本。</p><p>然后按照 <a href="https://koishi.chat/zh-CN/" target="_blank" rel="noreferrer">Koishi 官方文档</a> 安装 Koishi。</p><h2 id="配置机器人接入" tabindex="-1">配置机器人接入 <a class="header-anchor" href="#配置机器人接入" aria-label="Permalink to &quot;配置机器人接入&quot;">​</a></h2><p>安装 Koishi 后，您需要让机器人接入实际的聊天平台，或使用<a href="https://koishi.chat/zh-CN/manual/console/sandbox.html" target="_blank" rel="noreferrer">沙盒环境测试</a>。</p><p>如果您选择使用沙盒环境测试，可以直接进行<a href="/guide/getting-started.html#安装前置依赖插件">下一步</a>。</p><p>如果您选择接入实际的聊天平台，请参考：</p><ul><li><p><a href="https://forum.koishi.xyz/t/topic/2502/1" target="_blank" rel="noreferrer">查看如何接入 QQ</a></p></li><li><p><a href="https://koishi.chat/zh-CN/manual/console/adapter.html" target="_blank" rel="noreferrer">查看如何接入其他聊天平台</a></p></li></ul><h2 id="安装前置依赖插件" tabindex="-1">安装前置依赖插件 <a class="header-anchor" href="#安装前置依赖插件" aria-label="Permalink to &quot;安装前置依赖插件&quot;">​</a></h2><p>接下来需要安装 ChatHub 的必要前置依赖插件，这些插件为 ChatHub 提供了基础的服务。</p><h3 id="数据库插件" tabindex="-1">数据库插件 <a class="header-anchor" href="#数据库插件" aria-label="Permalink to &quot;数据库插件&quot;">​</a></h3><p>ChatHub 需要一个提供 <code>database</code> 服务的插件来存储会话信息等持久化数据。</p><p>我们推荐使用 <code>database-sqlite</code>，它轻量且开箱即用。</p><p>您也可以安装并配置其他数据库插件，如 MySQL、MongoDB 等。</p><h3 id="缓存插件" tabindex="-1">缓存插件 <a class="header-anchor" href="#缓存插件" aria-label="Permalink to &quot;缓存插件&quot;">​</a></h3><p>ChatHub 还需要一个提供 <code>cache</code> 服务的插件来存储某些临时配置。</p><p>我们推荐使用 <code>cache-database</code>，它几乎不需要配置。</p><p>需要注意，<code>cache</code> 服务版本需要 v2.0.0-alpha.0+。</p><h3 id="可选插件" tabindex="-1">可选插件 <a class="header-anchor" href="#可选插件" aria-label="Permalink to &quot;可选插件&quot;">​</a></h3><ul><li><p><code>puppeteer</code> 插件：用于网页截图和本地 HTML 渲染。</p></li><li><p><code>censor</code> 服务插件：用于回复内容过滤。注意，有的审核插件仅审核图片不审核文本。</p></li><li><p><code>vits</code> 服务插件：用于语音合成。我们推荐使用 <code>open-vits</code>。</p></li></ul><h2 id="安装-chathub-主插件" tabindex="-1">安装 ChatHub 主插件 <a class="header-anchor" href="#安装-chathub-主插件" aria-label="Permalink to &quot;安装 ChatHub 主插件&quot;">​</a></h2><p>搜索并安装 <code>@dingyi222666/chathub</code> 插件，这是 ChatHub 的主插件。</p><p>注意，主插件本身不包含任何平台适配，后面还需要安装平台适配插件。</p><h2 id="安装模型平台适配插件" tabindex="-1">安装模型平台适配插件 <a class="header-anchor" href="#安装模型平台适配插件" aria-label="Permalink to &quot;安装模型平台适配插件&quot;">​</a></h2><p>搜索并安装您需要的模型平台的适配插件，例如 <code>@dingyi222666/chathub-adapter-openai</code>。</p><p>您可以同时安装多个平台的适配插件，并通过命令切换。</p><h2 id="配置主插件" tabindex="-1">配置主插件 <a class="header-anchor" href="#配置主插件" aria-label="Permalink to &quot;配置主插件&quot;">​</a></h2><p>进入主插件配置页面，以下是一些重要的配置项，其他配置项会在后续的章节了解到：</p><ul><li><p><code>isProxy</code>：是否使用代理，对国内用户<strong>强烈推荐</strong>开启。</p></li><li><p><code>proxyAddress</code>：代理地址，格式为 <code>http://host:port</code>。</p></li><li><p><code>msgCooldown</code>：全局冷却时间，避免请求过于频繁。</p></li><li><p><code>outputMode</code>：回复的输出格式，支持语音、文本、图片等。</p></li></ul><h2 id="配置模型平台" tabindex="-1">配置模型平台 <a class="header-anchor" href="#配置模型平台" aria-label="Permalink to &quot;配置模型平台&quot;">​</a></h2><p>以 OpenAI 为例，进入平台适配插件配置页面：</p><ul><li><p><code>apiKey</code>：填写 OpenAI 的 API Key。</p></li><li><p><code>apiEndpoint</code>：OpenAI API 的基础地址，可配置反向代理地址。</p></li></ul><p>配置好后启用相关插件即可。可以使用 <a href="http://localhost:5173/guide/useful-commands.html#chathub-listmodel" target="_blank" rel="noreferrer"><code>chathub.listmodel</code></a> 查看已启用的平台。</p><h2 id="设置默认模型" tabindex="-1">设置默认模型 <a class="header-anchor" href="#设置默认模型" aria-label="Permalink to &quot;设置默认模型&quot;">​</a></h2><p>使用 <a href="http://localhost:5173/guide/useful-commands.html#chathub-setmodel" target="_blank" rel="noreferrer"><code>chathub.setmodel</code></a> 命令设置默认聊天模型。</p><h2 id="开始聊天" tabindex="-1">开始聊天 <a class="header-anchor" href="#开始聊天" aria-label="Permalink to &quot;开始聊天&quot;">​</a></h2><p>最后使用 <a href="http://localhost:5173/guide/useful-commands.html#chathub-chat" target="_blank" rel="noreferrer"><code>chathub.chat</code></a> 命令开始和设置好的 AI 模型聊天。</p><p>通过以上步骤，您已经配置好了 ChatHub，并且可以和 AI 模型聊天了。</p><p>接下来可以在下面的章节学习到更多的配置和使用方法。</p>',42),i=[r];function l(d,c,p,n,s,u){return a(),t("div",null,i)}const f=e(h,[["render",l]]);export{m as __pageData,f as default};
