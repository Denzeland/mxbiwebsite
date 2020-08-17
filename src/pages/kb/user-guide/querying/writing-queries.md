---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/25-writing-queries
title: 创建并编辑查询
slug: writing-queries
toc: true
order: 1
---

要创建一个新的查询, 点击菜单栏的 `创建` 按钮并选择 `查询`.

![](/assets/images/docs/gifs/queries/add_new_query.gif)

# 查询编辑器

## 查询语法

在大多数情况下，我们使用数据源本地的查询语言。 在某些情况下，也存在差异或添加的内容，这些内容被记录在[查询数据源]({% link _kb/data-sources/querying %})页面上。
## 键盘快捷键

- 执行查询: `Ctrl`/`Cmd` + `Enter`
- 保存查询: `Ctrl`/`Cmd` + `S`
- 切换自动完成: `Ctrl` + `Space`
- 切换窗口浏览模式 `Alt`/`Option` + `D`

## 浏览模式

在查询编辑器的左边，你会发现数据的浏览窗口:

<img src="/assets/images/docs/gitbook/schema-browser.png" width="60%">

数据浏览窗口将列出所有表，单击一个表时将显示它的列。要在查询中插入一个项目，只需单击右边的双箭头。您可以使用搜索框过滤模式，并通过搜索框旁边的刷新按钮刷新它(否则它会在后台定期刷新)。

{% callout %}
请注意，并非所有数据源类型都支持加载模式到左边的浏览窗口。
{% endcallout %}

您可以使用快捷键或双击界面上的窗格句柄来隐藏左边的数据浏览窗口。当您在编写查询时想要最大化屏幕时，这可能非常有用。

## 自动完成

查询编辑器还包括一个自动完成功能，使编写复杂查询变得更容易。实时自动完成在默认情况下是开启的。因此，您将在键入时看到表和列的建议。您可以通过单击查询编辑器下面的闪电螺栓图标来禁用实时自动完成。 当实时自动完成被禁用时，你可以通过按`CTRL` + `Space`来激活自动完成。

{% callout %}

除非您的数据库模式超过5000个令牌(表或列)，否则默认情况下启用实时自动完成。在这种情况下，您可以使用键盘快捷键手动触发自动完成。

{% endcallout %}

自动完成查找模式标记、查询语法标识符 (比如 `SELECT` or `JOIN`) 和 [查询代码段]({% link _kb/user-guide/querying/query-snippets %}) 的标题。

# 查询设置

## 已发布的查询 vs 未发布的查询

默认情况下，每个查询都以一个未发布的草案开始，名称为**新查询**。它不能包含在仪表板上，也不能与通知一起使用。


若要发布查询，请更改其名称或单击`发布`按钮。您可以通过单击`取消发布`按钮来切换已发布状态。取消发布查询不会将其从仪表板或通知中删除。但它会阻止您将其添加到其他任何仪表板或通知中。

{% callout info %}

发布或取消发布查询不会影响其可见性。
组织中的所有查询对所有已登录的用户都可见。

{% endcallout %}


## 归档查询

在木星BI平台你不能删除查询。但你可以把它们存档。归档与删除类似，只是指向查询的**直接链接仍然有效**，要归档查询，打开查询编辑器右上方的垂直省略号菜单，然后单击归档。

![](/assets/images/docs/gitbook/archive_query.png)

## 克隆(派生)查询

如果需要创建现有查询的副本(由您或其他人创建)，可以派生它。要派生一个查询，只需单击克隆按钮(参见下面的示例)

![](/assets/images/docs/gifs/queries/fork_query.gif)

## 管理查询的权限

默认情况下，保存的查询只能由创建查询的用户和Admin组的成员修改。但是木星BI平台提供了实验性的支持，可以与非管理员用户共享编辑权限。组织中的管理员需要首先启用它。打开您的组织设置，并检查“启用实验性多所有者支持”

![](/assets/images/docs/gitbook/experimental-owners-support.png)

现在，查询编辑器选项菜单包括一个`管理权限`选项。点击它会打开一个对话框，在那里你可以添加其他用户作为有权限的编辑者到你的查询或仪表盘。

![](/assets/images/docs/gitbook/experimental-permissions-button.png)

请注意，目前你添加的用户不会收到通知，所以你需要手动通知他们。

