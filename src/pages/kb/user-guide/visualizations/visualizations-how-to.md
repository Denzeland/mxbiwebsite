---
category: visualizations
parent_category: user-guide
title: 如何可视化数据
toc: true
order: 1
slug: visualizations-how-to
---

## 创建一个新的可视化

一旦您的查询完成第一次运行，您就可以通过单击结果表上方的`添加可视化`按钮来添加可视化。

![](/assets/images/docs/gitbook/new-viz.png)

## 编辑可视化

您可以从查询编辑器屏幕修改现有可视化的设置。单击选项卡栏上的可视化，您将在每个可视化下面看到一个`编辑可视化`选项。单击它将打开该可视化的当前设置(类型、X轴、Y轴、分组等)。点击“保存”来应用你的更改，或者点击“取消”不留下任何痕迹。

## 嵌入可视化

在其他应用嵌入木星BI可视化很容易。只需单击任何可视化下面的省略号按钮，以显示更多的选项，并选择`嵌入到其他地方`。

<img src="/assets/images/docs/gitbook/embed-viz.png" width="60%">

This will pop up the `<iframe>` code you can drop into your HTML pages.

{% callout warning %} Queries with text-type parameters do not support embeds.
{% endcallout %}

### PNG image Embeds

For SaaS customers, there is also a hardlink to a PNG of your visualization
hosted through `snap.redash.io`. The PNG embed is especially useful in contexts
where iframes won't work (like GitHub issues). If you need the visualization PNG
to include a `Cache-Control: no-cache` header, just tack the Query String
variable `?no-cache` to the end of your PNG embed link.

### Query String Variables for Embeds

You can append query string variables to your embed URLs:

- `?hide_parameters` hides any parameter selection widgets
- `?hide_header` hides the branded Redash header and query title
- `?hide_link` hides the link back to Redash
- `?hide_timestamp` hides the timestamp

### Downloading A Visualization as an Image File

For chart visualizations, you can also download a local image file. Just hover
your mouse near the top right area of the visualization and click the camera
icon that appears. A PNG will be downloaded to your device.

<img src="/assets/images/docs/gitbook/download_viz.png" width="60%">
