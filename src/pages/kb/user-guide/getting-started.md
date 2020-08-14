---
permalink: /help/user-guide/getting-started
layout: kb-category
order: 1
toc: true
description: Getting started with Redash is easy and takes only a few minutes - connect a data source, write a query, add a visualization, create a dashboard and invite your colleagues!
category: getting-started
parent_category: user-guide
helpscout_url: https://help.redash.io/article/32-getting-started
keywords:
  - 添加数据源
  - 数据源
  - 编写查询
  - 添加可视化
title: 开始使用
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Yn3_QDk2qQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1. 添加一个数据源

首先要做的是连接数据源 ([查看目前支持的数据源]({% link _kb/data-sources/supported-data-sources %})). 点击设置图标，打开数据源管理页面:

![](/assets/images/docs/settings_icon.png)

{% callout %}
如果您正在使用我们的托管服务，并且您的数据源配置了防火墙, 您需要 **允许我们的IP地址 `52.71.84.157`访问** 在您的数据库防火墙/安全组中。
{% endcallout %}

{% callout %}
如果可能的话，我们建议使用具有**只读权限**的用户。
{% endcallout %}

![](/assets/images/docs/gitbook/add-data-source.gif)

## 2. 编写一个查询

一旦连接了数据源，就可以编写查询了: **在菜单栏点击"创建"按钮, 并且选择"查询"**. 查看[“编写查询” 页面]({% link _kb/user-guide/querying/writing-queries.md %}) 来找到更多关于编写查询的指南。

![](/assets/images/docs/gifs/queries/add_new_query.gif)

## 3. 添加可视化

默认情况下，您的查询结果(数据)将出现在一个简单的表中。可视化可以更好地帮助您消化复杂的信息，所以让我们可视化您的数据。 木星BI平台支持[丰富的可视化类型]({% link _kb/user-guide/visualizations/visualization-types.md %}) 你可以找到一个适合你需要的。

点击数据表格上面的“添加可视化” 按钮根据您的需要选择完美的可视化。 您可以在[这里]({% link _kb/user-guide/visualizations/visualizations-how-to.md %})查看更详细的指南.

![](/assets/images/docs/gifs/visualization/new_viz.gif)

## 4. 创建一个仪表板

您可以结合可视化和文本到可自定义主题和强大的仪表板。点击导航栏中的“创建”，然后选择“仪表板”，添加一个新的仪表板。仪表板对团队成员可见，也可以公开共享。 更多详细信息 [点击这里]({% link _kb/user-guide/dashboards/dashboard-editing.md %}).

![](/assets/images/docs/gifs/dashboards/dashboards.gif)

## 5. 邀请同事

木星BI平台也是一个很好的协作平台。

管理员，要开始享受木星BI平台的协作特性，你需要邀请你的团队!

用户可以查看团队成员的查询以获得灵感 (或者调试 😉), 让他们创建自己的类似查询，查看和创建仪表板，并通过电子邮件、Slack、Mattermost或HipChat与他人分享见解。

用户只能被管理员邀请 - 为了邀请一个新用户请到 `设置`>`用户` 并且点击 `新用户`:

![](/assets/images/docs/gitbook/add-user.png)

然后，填写他们的姓名和电子邮件。他们将通过电子邮件收到邀请，并被要求建立一个木星BI平台账户。

要将用户添加到现有组, 请到 `设置`>`分组`, 选择组，输入用户名添加用户:

![](/assets/images/docs/gitbook/view-only-groups.png)
