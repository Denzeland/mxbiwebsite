---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/152-query-results-data-source
title: 查询已经存在的查询结果
slug: query-results-data-source
order: 2
---

**查询结果数据源** (一下简称QRDS)允许您对来自其他数据源的结果运行查询。使用它来连接来自多个数据库的数据或执行后处理。木星BI平台使用内存中的SQLite数据库来实现这一点。因此，如果木星BI平台耗尽内存，对大型结果集的查询可能会失败。

{% callout warning %}

QRDS不适用于使用[参数]的查询结果。如果你尝试它，你会看到`运行查询出错:从查询id xxxx加载失败的结果`。从`query_xxxx`中删除参数以修复错误。

{% endcallout %}

### 初始化

您可以在`设置`菜单的`数据源`选项卡下启用**查询结果**。设置很简单:只需为数据源提供一个名称。

![](/assets/images/docs/gitbook/query-results-setup.png)


这个名称将出现在查询编辑器左侧的数据源下拉列表中。在下面的截图中，数据源被称为**查询结果**。

![](/assets/images/docs/gitbook/query-results-example.png)

{% callout info %}

大多数组织只需要**一个**查询结果数据源。
{% endcallout %}


### Querying
QRDS也支持[SQLite查询语法](https://sqlite.org/lang.html):

```
SELECT
	a.name,
	b.count 
FROM query_123 AS a 
JOIN query_456 AS b
  		ON a.id = b.id
```

您的其他查询类似于QRDS的“表”。每个查询器的别名都是`query_`，后面跟着它的`query_id`，你可以在浏览器的URL栏从查询编辑器中看到。例如，`/queries/49588`上的查询具有别名`query_49588`。

{% callout warning %}
查询别名比如`query_49588` _must_与它关联的`FROM`或`JOIN`关键字出现在同一行。
{% endcallout %}

### 缓存查询结果
当您查询**查询结果数据源**时，木星BI首先执行底层查询。如果您[定期更新一个QRDS查询](/help/user-guide/querying/scheduling-a-query)，这保证了最近的结果。你可以为你的查询别名使用`cached_query_`而不是`query_`来加速QRDS查询。这告诉木星BI平台使用来自给定查询最近执行的缓存结果。这可以通过使用旧数据来提高性能。你也可以在同一个查询中混合使用这两种语法:

```
SELECT
	a.name,
	b.count 
FROM cached_query_123 AS a 
JOIN query_456 AS b
  		ON a.id = b.id
```

### 查询结果的权限
对**查询结果数据源**的访问由与之关联的组管理[与任何其他数据源一样](/help/user-guide/users/permissions-groups).但是木星BI还会检查用户是否有权限在原始查询使用的数据源上执行查询。


例如，如果查询`123`使用了该用户无法访问的数据源，那么具有QRDS访问权的用户就不能执行`SELECT * FROM query_123`。他们将从木星BI的查询屏幕中看到最近缓存的QRDS查询结果。但是它们将不能再次执行查询。