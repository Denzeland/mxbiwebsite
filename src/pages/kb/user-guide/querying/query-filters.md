---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/45-query-filters
title: 查询过滤
slug: query-filters
---

查询过滤器允许您以交互方式减少可视化中显示的数据量，这与查询参数类似，但有一些关键的区别。查询过滤器限制数据后，已加载到您的浏览器。这使得它们非常适合于较小的数据集和查询执行耗时、速率受限或成本高昂的环境。

## Usage

与查询参数不同，木星BI平台没有添加过滤器的按钮。相反，如果您想要关注一个特定的值，只需将您的列别名为`<columnName>::filter`。这里有一个例子:

```
SELECT action AS "action::filter", COUNT(0) AS "actions count"
FROM events
GROUP BY action
```

{% callout %}
请注意，您可以使用 `__filter` 或 `__multiFilter`(双下划线而不是双引号)，如果你的数据库列名不支持::
{% endcallout %}

![](/assets/images/docs/gitbook/filter_example_action_create.png)

If you need a multi-select filter then alias your column to `<columnName>::multi-filter`.
如果您需要一个多选择过滤器，可以给你的列名取一个别名`<columnName>::multi-filter`。

```
SELECT action AS "action::multi-filter", COUNT (0) AS "actions count"
FROM events
GROUP BY action
```

![](/assets/images/docs/gitbook/multifilter_example.png)

您也可以在仪表板上使用查询过滤器。默认情况下，过滤器小部件将出现在将筛选器添加到查询中的每个可视化页面的旁边。如果您想要将这些过滤器小部件链接到一个仪表板级别的查询过滤器中，请参阅[这些说明]({% link _kb/user-guide/dashboards/dashboard-editing.md %}).

## 局限性

查询过滤器不适合特别大的数据集或具有数百或数千个不同字段值的查询结果。根据您的计算机和浏览器配置，过多的数据可能会恶化用户体验。
