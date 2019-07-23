---
layout: page
title: "新着情報一覧"
description: shoyaiwanami.comの過去の新着情報一覧
date: 2019-07-20 01:28:37 +0900
last_modified_at: 2019-07-24 01:28:37 +0900
permalink: /news/
---

# {{ page.title }}

{{ page.description }}

{% for news in site.categories.news %}

<hr>

### {{ news.title }}
{% if news.categories[1] %}<strong>[{{ news.categories[1] }}] </strong>{% endif %} <span class="text-muted">公開: {{ news.date | date: "%Y年%-m月%-d日" }} / 更新: {{ news.last_modified_at | date: "%Y年%-m月%-d日" }}</span>

{{ news.description }}

[[詳細]]({{ news.url }})
{% endfor %}
