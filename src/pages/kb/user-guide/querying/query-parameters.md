---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/44-query-parameters
keywords:
  - 变量
  - 模板
title: 查询参数
slug: query-parameters
toc: true
order: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/02iQXd2Ouos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


使用参数，您可以在运行时将值替换为查询，而不必**编辑数据源**。双花括号`{{ }}`之间的任何字符串将被视为参数。结果窗格上方将出现一个小部件，您可以更改参数值。

<img src="/assets/images/docs/gitbook/parameter-example.png">

在编辑模式下，可以单击每个参数小部件的齿轮图标来调整其设置。当你点击**只显示数据**时齿轮图标会消失，这样不拥有查询的用户就不能改变参数行为。


<img src="/assets/images/docs/gitbook/query-parameter-widgets.png">

## 从UI添加一个参数

你可以在你的查询中插入一个参数，然后使用`添加参数`按钮或相关的键盘快捷键立即激活它的设置窗口。该参数将在查询中出现文本插入符号的任何地方插入。如果您发现在查询的错误部分插入了参数，您可以选择整个参数(包括花括号)并在需要的地方剪切/粘贴它。

{% callout %}

您可以通过将光标停留在`添加参数`按钮上方来查看使用此功能的快捷键。

{% endcallout %}

### 参数设置

点击每个参数小部件旁边的齿轮图标，编辑其设置:

- **标题** : 默认情况下，参数标题将与查询文本中的关键字相同。如果您想给它起一个更友好的名字，您可以在这里更改它。
- **类型** : 每个参数都以文本类型开始。支持的类型是文本、数字、日期、日期和时间、日期和时间(带有秒)以及下拉列表。

<img src="/assets/images/docs/gitbook/parameter-modal-v9.png" >


{% callout info %}
在木星BI 7.0版本之前，查询编辑器中的参数设置窗口包括一个`全局`复选框，它通知木星BI您打算在仪表板中的多个小部件之间使用此参数。自版本6以来，`全局`复选框已经被替换为新的*仪表板上的参数映射*功能，如下所示。
{% endcallout %}

{% callout danger %}

出于安全原因，木星BI平台用户必须具有数据源的[完全访问]({% link _kb/user-guide/users/permissions-groups.md %})权限才能使用文本类型的查询参数。其他类型，如日期、日期范围、数字或下拉列表对所有用户都可用。

{% endcallout %}

### 日期和日期范围参数

日期参数使用一个熟悉的日历选择界面，可以默认为当前日期和时间。您可以从三个精度级别进行选择:日期、日期和时间，以及带秒的日期和时间。

日期范围参数插入两个称为`.start`和`.end`的标记，表示所选日期范围的开始和结束。

```
SELECT a, b c
FROM table1
WHERE
  relevant_date >= '{{ myDate.start }}'
  AND table1.relevant_date <= '{{ myDate.end }}'
```

{% callout info %}

日期参数作为字符串传递到数据库。所以应该将它们包装在单引号(`'`)或数据库用于声明字符串的任何东西中。尽管它们的行为类似于文本参数，但日期在嵌入和共享仪表板中使用仍然是安全的。

{% endcallout %}

日期范围参数使用组合小部件来简化范围选择。

![](/assets/images/docs/gitbook/date-range-picker.png)

#### 快速日期和日期范围选项

当您向查询中添加日期或日期范围参数时，selection小部件将显示蓝色闪电标记。点击它可以看到`上个月`、`昨天`、`去年`等动态值。这些值每天都在动态更新。

{% callout warning %}
因为动态日期和日期范围是在前端计算的，所以它们与定时查询不兼容。
{% endcallout %}

![](/assets/images/docs/gitbook/quick-date-range.png)


### 下拉列表

如果您想在运行查询时限制可能的参数值的范围，您可以使用木星BI平台的`下拉列表`参数类型。从参数设置面板中选择后，将出现一个文本框，您可以在其中输入允许的值，每个值之间用新行分隔。下拉列表是`文本`参数，所以如果你想在你的下拉列表中使用日期/日期时间，你应该以你的数据源需要的格式输入它们。

#### 基于查询的下拉列表

下拉列表还可以绑定到现有查询的结果。在设置面板的**类型**下单击`基于查询的下拉列表`。在**查询以加载下拉列表值**栏加载下拉列表值。如果目标查询返回大量记录，则性能会下降。

如果你的目标查询返回一个以上的列，木星BI平台使用_first_ one。如果您的目标查询返回`name`和`value`列，木星BI使用`name`列填充参数选择小部件，但使用相关联的`value`执行查询。

例如，假设有以下查询:

{% raw %}
SELECT user_uuid as 'value', username as 'name'
FROM users
{% endraw %}

返回的数据如下：

| value | name         |
| ----- | ------------ |
| 1001  | John Smith   |
| 1002  | Jane Doe     |
| 1003  | Bobby Tables |

木星BI平台的下拉列表部件看起来是这样的:

<img src="/assets/images/docs/gitbook/dropdown-list-name-value.png"  alt="The widget shows John Smith, Jane Doe and Bobby Tables">

但是当木星BI执行查询时，传递给数据库的值将是1001、1002或1003。

#### 序列化多选

下拉列表也可以序列化以允许多选择。只需切换**允许多个值**选项，并选择是否使用单引号或双引号包装参数。

<img src="/assets/images/docs/gitbook/multi-select-dropdown.png">

在你的查询中，改变你的`WHERE`子句使用`In`关键字。

```
SELECT ...
FROM   ...
WHERE field IN ( {{ Multi Select Parameter }} )
```

参数多选小部件允许您向数据库传递额外的值。

<img src="/assets/images/docs/gitbook/multi-select.png" >

### 相关问题

**我可以在一个查询中多次重用相同的参数吗?**

当然可以！只需在花括号中使用相同的标识符。在这个例子中:

```sql
SELECT {{org_id}}, count(0)
FROM queries
WHERE org_id = {{org_id}}
```

We use the `{{org_id}}` parameter twice.
我们使用了 `{{org_id}}`参数两次

**我可以在一个查询中使用多个参数吗?**

当然可以，只需为每一个使用唯一的名称。比如下面这个例子中:

```sql
SELECT count(0)
FROM queries
WHERE org_id = {{org_id}} AND created_at > '{{start_date}}'
```

我们使用了两个参数：`{{org_id}}` and `{{start_date}}`.

**我可以使用在嵌入式可视化和共享仪表板中的参数吗?**

是的，只有一个例外。如果查询使用文本类型参数，则不能将其嵌入，因为文本参数在SQL注入中不安全。所有其他类型的查询参数都可以安全地在嵌入的可视化和指示板中使用。

| 参数类型                | 嵌入是否安全？ |
|-------------------------------|---------------------|
| 文本                          | 否                  |
| 数字                        | 是                 |
| 下拉列表               | 是                 |
| 基于查询的下拉列表 | 是                 |
| 日期                        | 是                 |
| 日期和时间              | 是                 |
| 日期和时间带有单位秒 | 是                 |
| 日期范围                  | 是                 |
| 日期和时间范围    | 是                 |
| 日期和时间范围带有单位秒 | 是                 |

{% callout info %}

在木星BI版本8之前，嵌入式可视化中不允许使用参数。在未来的版本中，所有类型的参数都将被允许在公开共享的仪表板和可视化中使用。我们的平台总是运行应用程序的最新可用版本。

{% endcallout %}

**我可以通过URL改变参数值吗?**

是的。每个参数都出现在URL查询字符串中，前面是' p_ '。id为“1234”的查询和以下查询文本:

```
SELECT * FROM table WHERE field = {{param}}
```

我们将有一个类似这样的链接： `https://app.mxbi.io/<slug>/queries/1234?p_param=100`

这对于查询和指示板之间的链接非常有用。

## 仪表板上的参数映射

查询参数也可以在指示板中进行强大的控制。您可以将不同小部件上的参数链接在一起，设置静态参数值，或者为每个小部件分别选择值。

在添加依赖于参数值的仪表板小部件时选择所需的参数映射。基础查询中的每个参数将出现在**参数**列表中。

<img src="/assets/images/docs/gitbook/dashboard_parameter_mapping.png" width="100%">

{% callout info %}
您还可以访问参数映射接口通过单击垂直省略号(`⋮`)仪表盘上的右上角小部件然后点击**编辑参数**。
{% endcallout %}

+ **标题**是参数的显示名称，将出现在仪表板上的值选择器旁边。它默认使用参数关键字(见下一个要点)。通过单击铅笔符号编辑它。注意，静态仪表板参数不会显示标题，因为值选择器是隐藏的。如果你选择`静态值`作为你的值源，那么标题字段将会变成灰色。

+ **关键字** 是基础查询中此参数的字符串文字。如果指示板没有返回预期的结果，这对于调试非常有用。

+ **默认值** 是在没有指定其他值时木星BI将使用的值。要在查询屏幕上更改这一点，请使用所需的参数值执行查询并单击**保存**按钮。

+ **值的来源** 是您选择首选映射的位置。单击铅笔符号以打开映射设置。

### 值的来源选项

+ **新的仪表板参数:** 仪表板参数允许您在仪表板上的一个位置设置参数值，并将其映射到多个可视化。使用此选项创建一个新的仪表板级参数。

+ **现有的仪表板参数:** 如果已经设置了仪表板级参数，则使用此选项将其映射到特定的查询参数。您需要指定将映射哪些预先存在的仪表板参数。

+ **小部件参数:** 此选项将在您的仪表板小部件中显示一个值选择器。这对于不在小部件之间共享的一次性参数非常有用。

+ **静态值:** 选择这个选项将允许您为这个小部件选择一个静态值，而不用考虑其他小部件上使用的值。静态映射的参数值不会在仪表板上的任何位置显示值选择器，这样更紧凑。这使您能够利用查询参数的灵活性，而不会在某些参数预计不会频繁更改时造成仪表板上的用户界面混乱。
