---
category: visualizations
parent_category: user-guide
title: 图表可视化
toc: true
slug: chart-visualizations
# IMG BASE URL /assets/images/docs/gitbook/
---

木星BI平台将使用X和Y轴的图表统一归纳到到**图表**可视化类型中，它可以采取八种不同的形式。由于形式相似，您通常可以在它们之间无缝切换，以找到最能表达您的意思的形式。在下面的动画中，所有8个图表都是基于相同的SQL查询结果构建的:

`video: /assets/images/docs/gifs/visualization/chart-examples.mp4`

# 设置

您的查询应该至少返回两列:一列是**X轴**的值，另一列是**Y轴**的值。它还可以返回跟踪[分组]、显示[错误条]和气泡大小的值。

以上动画中的图表都是由以下表格结果生成的:

![](/assets/images/docs/gitbook/animation-table-data.png)

一旦查询返回正确的列，就从设置X轴和Y轴值开始。可视化预览会即时更新。您不需要保存可视化，就可以查看更改如何影响其外观。可视化设置屏幕顶部的选项卡为您提供了对图表其余部分的细粒度控制。

使用**X轴**和**Y轴**选项卡修改轴范围和标签。

The **Series** tab is powerful. It lets you change your data aliases, z-index behavior, assign traces between the left- and right- Y axes. It also lets you combine different trace forms on one chart like in the chart below.
序列选项卡功能强大。它允许您更改数据别名、z-index行为、在左Y轴和右Y轴之间分配跟踪。它还允许在一个图表上组合不同的跟踪数据的形式，如下图所示

![](/assets/images/docs/gitbook/multi-form-chart.png)

**颜色** 提供一个颜色选择器，用于更改图表上跟踪的外观。

**数据标签** 控制将鼠标悬停在图表上时显示的内容。

# 分组

**分组**设置可以针对相同的X和Y轴生成多个跟踪。它通过将记录分组到不同的跟踪而不是绘制一条线来实现这一点。几乎每次在木星BI图表中看到多种颜色的线或条时，都是因为查询结果包含了一个分组列。

如下面的示例所示，分组列用于对`(x,y)`对进行排序。

![](/assets/images/docs/gitbook/group-by-ex.png)

使用**分组**通常比编写为X值返回多个Y列的查询更容易。以下两个数据集是相同的。

![](/assets/images/docs/gitbook/grouped-vs-pivot.png)

{% callout info %}

对已融化的数据集使用**分组**列。对旋转数据集使用多个y列

{% endcallout %}

# 堆叠

木星BI可以将Y轴值堆叠在一起。名称名称借用了[堆叠柱状图]，但它对面积图也很有用。下面的图片显示了相同的数据，左边是未堆叠的，右边是堆叠的。

![](/assets/images/docs/gitbook/stacked_vs_not_stacked.png)

请注意，每个Y轴值是如何显示为其自身及其“下面”的Y值的和的。

{% callout info %}

堆叠和分组是相关的。如果没有对数据进行分组，就不会对数据进行堆叠。

{% endcallout %}


您可以使用可视化编辑器的**序列**选项卡来控制跟踪的堆叠顺序。您还可以通过在查询中添加一个`ORDER by`语句来控制它。堆叠遵循组名称在查询结果中首次出现的顺序。堆叠仅适用于直线图、条形图和面积图。

# 误差条形图

For certain chart forms, Redash can draw error bars around your data points using values from your query result. A few things are always true of error bars:
对于某些图表形式，木星BI可以使用查询结果中的值在数据点周围画出误差柱形。有几件事总是正确的误差条:

1. 误差柱形总是对称的。给定`(x,y)`对的上下距离总是相同的。
2. 误差与目标迹的颜色相同
3. 所有跟踪或不跟踪都会显示误差。它们不能配置为出现在某些跟踪上，而不出现在其他跟踪上。
4. 误差列中的值将绘制在与其关联的跟踪相同的轴上。这意味着你的错误值必须是绝对的。例如，错误不能用百分比表示，而Y值不能用数百表示。

![](/assets/images/docs/gitbook/area_grouped_stacked_errors.png)

Also keep in mind that errors are not aggregated when you stack records. An error bar will be shown for each trace. You can work around this by only providing non-zero error values for those records where the error should be displayed prominently. See in the above example that a flat error bar is shown at every trace point. But only the `Paid` trace error bars have any length.
还要记住，在堆叠记录时不会聚合错误。每个跟踪都会显示一个误差柱形。您可以通过只为那些应该突出显示误差的记录提供非零错误值来解决这个问题。在上面的例子中，每个跟踪点上都显示了一个平面误差条。但是只有`付费`跟踪误差条有长度。

# 使用图表的形式
每种图表形式都适用于某些类型的表示。您可以根据需要在同一个图表中混合和匹配多种形式。

* **折线图** 几乎专门用于在_time_上呈现一个或多个指标的变化。
* **条形图** 可以用来表示度量随时间的变化或显示比例，如饼图。柱状图可与[堆叠]结合使用，效果显著。
* **面积图** 图表经常用来显示销售汇集的数据随时间的变化。它们经常与[堆叠]相结合以提供更广阔的图景。
* **饼图** 用于显示指标之间的比例性。它们是用来传输时间序列数据的。
* **散点图** 擅长显示多组数据点。在表面之下，散点图就像直线图，但是没有连接线。散点图更精确，但对时间序列数据不太有用。
{% callout info %}

在某些组只出现一次的情况下，散点图对于可视化是必要的。折线图不显示单值，因为它只能显示有两个或两个以上点的数据。一种方法是在可视化编辑器的**序列**选项卡上强制单例对象以散点形式显示，同时保持其他跟踪的行形式。

{% endcallout %}

* **气泡图** 图表是散点图，其中每个点标记的大小反映了一个相关的度量。
* **热力图** 可视化混合了条形图、叠加图和气泡图的特性。有几个内置的配色方案可供选择。热图不能分组，因为整个图表技术上是一个轨迹。
* **盒形图** 可以自动显示数据点在分组类别中的分布。

# 常见的错误

## 每x轴值对应多个记录

如果您的查询返回具有相同**X轴**值的两行或更多行，木星BI可以产生一些意想不到的形状。在SQL中，如果无意中以一对多的关系`JOIN`表，通常会发生这种情况。

![](/assets/images/docs/gitbook/error_double_entries.png)

在本例中绘制了一条垂直线，因为1月1日有两条记录。您可以通过过滤掉**X轴上的双值条目来解决这个问题。或修改查询以包含[grouping]字段，如下所示。

![](/assets/images/docs/gitbook/error_double_entries__solved.png)

## 无序的X轴记录

木星BI非常聪明，能够计算出最常见的**X轴**尺度:时间戳、线性和对数。但是，如果它不能将X列解析为有序的级数，它就只能将每个X值作为一个“类别”来处理。这可能会产生混合结果:

![](/assets/images/docs/gitbook/charted_redash_logo__broken.png)

If you see shapes you don't expect you can check whether your X axis has been sorted on the **X Axis** tab of the Visualization Editor. Just toggle the _Sort Values_ option. If _Sort Values_ is disabled then Redash retains the ordering of the source query.
如果您看到了您不期望的形状，您可以检查您的X轴是否已经在可视化编辑器的**X轴**选项卡上排序。只需切换排序值选项。如果排序值被禁用，那么木星BI将保留源查询的顺序。

![](/assets/images/docs/gitbook/charted_redash_logo__working.png)

这两个图表来自相同的基础数据。唯一的区别是木星BI是否对X轴值进行排序。


[Group By]: #Grouping
[grouping]: #Grouping
[Errors]: #error
[error bars]: #error
[Stacking]: #Stacking

[Line]: #line
[Bar]: #bar
[Area]: #area

[Stacked Bar Charts]: https://en.wikipedia.org/wiki/Bar_chart#Grouped_and_stacked