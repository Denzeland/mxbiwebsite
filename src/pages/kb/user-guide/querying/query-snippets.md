---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/39-query-snippets-shortcuts
title: 查询代码段
slug: query-snippets
---


复制和粘贴是组合数据库查询的重要部分。因为复制之前的工作比从头开始编写要容易得多。对于常见的`JOIN`语句或复杂的`CASE`表达式来说尤其如此。然而，随着木星BI平台中查询列表的增长，可能很难记住哪些查询包含您现在需要的语句。输入查询代码片段。


查询代码片段是整个团队可以通过自动完成来共享和触发的查询片段。你可以在`Settings`->`查询代码段`中创建它们。

![](/assets/images/docs/gitbook/Snippet.png)

下面是一个简单查询代码片段的例子:

```
JOIN organizations org ON org.id = ${1:table}.org_id
```  

## 插入点

`${1:table}`是带有占位符文本的插入点。当木星BI平台渲染代码片段时，美元符号`$`和花括号`{}`将被删除，单词`table`将突出显示供用户替换。

{% callout info %}
您可以使用占位符文本作为用户希望在运行时覆盖的默认值。
{% endcallout %}

您可以通过使用单个美元符号和大括号`${}`包装整数制表符顺序来指定插入点。前接冒号`:`的文本占位符是可选的，但对于不熟悉代码片段的用户很有用。


当木星BI平台呈现以下代码片段:

	AND (invoices.complete IS NULL OR invoices.complete <> '${2}')
	AND (invoices.canceled IS NULL OR invoices.canceled <> '${1}')
	AND (invoices.modified IS NULL OR invoices.modified_date <> '${0: this_date}')

文本插入光标将跳转到引号`''`之间的第二行。当用户按`Tab`键时，光标将`向后`跳转到第一行。当用户再次按`Tab`时，光标将跳转到第三行，`this_date`将高亮显示，提示用户输入所需的值。

{% callout info %}
0号插入点`${0}`的始终是制表符顺序中的*最后*点。
{% endcallout %}

## 插入查询代码片段
如果启用了实时自动完成，则可以通过键入在查询代码片段编辑器中定义的触发词，从查询编辑器调用代码片段。自动完成将建议它在您的数据库像任何其他关键字。
{% callout warning %}
如果禁用了实时自动完成，您仍然可以通过按`CTRL + Space`并为您的查询片段键入触发器词来调用查询片段。如果您的数据模式超过5000条，这可能是必要的。
{% endcallout %}

这里有一些关于使用查询代码段的其他建议:

  * 频繁的`JOIN`语句
  * 复杂从句，如`WITH`或`CASE`。