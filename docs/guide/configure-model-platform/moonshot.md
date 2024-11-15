# Moonshot

Moonshot API 是由 Moonshot AI 提供的一种基于 HTTP 的 API 服务，允许开发者访问 Moonshot AI 的语言模型，例如 moonshot-v1-8k、moonshot-v1-32k 和 moonshot-v1-128k 等版本。这些模型支持不同长度的文本生成，从短文本到超长文本，适用于多种应用场景，如聊天对话生成、文件内容提取等。

由于 Moonshot API 兼容 OpenAI 的 API 格式，我们可以安装 `openai-like-adapter` 适配器来使用该公司提供的模型。

## 安装

前往插件市场，搜索 `chatluna-openai-like-adapter`，安装即可。

![openai-like-adapter](../../public/images/image-11.png)

## 配置

在配置之前，请先前往 [Moonshot AI](https://platform.moonshot.cn/console/api-keys) 获取 API key。

::: tip 提示
未来我们可能会录制官方教程，敬请期待。
:::

获取到 API key 后，转到 `openai-like-adapter` 的配置页面。

在 `openai-like-adapter` 配置页里可以更改平台名，我们建议更改为 `moonshot`。
当然，你也可以更改你喜欢的其他平台名。

完成后在请求设置里填入你的 API key 和 请求地址。请求地址应为 `https://api.moonshot.cn/v1`。

![alt text](../../public/images/image-20.png)

记得点击右上角的保存按钮。

## 使用

在适配器的配置页面，点击运行按钮，如无误，你应该看不到任何错误 log，那即可转到 ChatLuna 的主插件页面。

在主插件页面，下划到 [模版房间选项](../useful-configurations.md#模版房间选项)，查看 [defaultModel](../useful-configurations.md#defaultmodel) 的选项里是否含有 Moonshot 模型，如果有，则说明你已经成功地接入了 Moonshot 平台。

![alt text](../../public/images/image-21.png)
