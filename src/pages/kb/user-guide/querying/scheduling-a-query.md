---
category: querying
parent_category: user-guide
helpscout_url: https://help.redash.io/article/41-scheduling-a-query
title: 如何定时执行查询
slug: scheduling-a-query
order: 4
---


您可以使用定期执行查询来更新仪表板或激活常规的通知。默认情况下，您的查询没有设置定期执行（定时任务）。但这很容易设置。在查询编辑器的右下角，你会看到更新调度显示:

<img src="/assets/images/docs/gitbook/refresh-settings.png">


单击**Never**将打开一个设置定时任务间隔的选择器。

<img src="/assets/images/docs/gitbook/schedule-modal.png">

您的查询将自动运行调度设置。

{% callout info %}


当您在一天中的某个时间运行定时任务查询时，木星BI将您的选择转换为UTC，使用您计算机的当地时区。
这意味着如果你想在UTC中某个时间运行一个查询，你需要通过你的本地偏移量来调整选择器。


例如，如果您希望查询在每天的`00:00`UTC执行，但是您当前的时区是CDT (UTC-5)，那么您应该在定时任务设置中输入`19:00`。UTC值将显示在您所选择的选项的右侧确认你的计算。

{% endcallout %}

{% callout warning %}


定时任务查询目前不支持使用参数查询。您可以使用取而代之的是[木星BI API]({% link _kb/user-guide/integrations-and-api/api.md %})和一个像CRON这样的调度系统。

{% endcallout %}

## 查询失败报告的定时任务

木星BI V8版本增加了如果一个或多个查询失败，每小时发送一次邮件查询的能力。这些邮件会继续发送，直到不再出现故障。故障报告电子邮件运行在独立于实际查询调度的进程上。在查询执行失败后，木星BI平台可能需要一个小时才能发送失败报告。


您可以从组织设置切换失败报告。在**特色功能**选中**当计划查询失败使用电子邮件通知查询的所有者**。

<img src="/assets/images/docs/gitbook/failure-report.png">