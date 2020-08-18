---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/43-download-query-results
title: 如何下载 / 导出查询结果
slug: download-query-results
---

# How to download a query result

访问任何查询页面并单击垂直省略号按钮(`⋮`)在结果窗口。然后选择下载CSV、TSV或Excel文件。此操作下载当前查询结果。

<img src="/assets/images/docs/gitbook/download-dataset.png">

# 如何通过API获得最新的结果

访问任何查询页面并点击查询编辑器上面的水平省略号(`…`)。然后选择**显示API密钥**。出现在模态框中的链接总是指向最新的查询结果。您可以选择API调用返回的CSV和JSON格式。

{% callout info %}

It's not shown in the interface, but you can also get the Excel format by changing the file type suffix from `json`/`csv` to `xlsx`.
它没有显示在界面中，但你也可以通过改变文件类型后缀`json` / `csv`到`xlsx`得到Excel格式。

{% endcallout %}

<img src="/assets/images/docs/gitbook/show-api-key.png">

{% callout warning %}

使用参数的查询不支持最新的结果API。

{% endcallout %}


