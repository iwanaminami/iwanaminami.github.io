---
layout: page
title: "新着情報一覧"
description: shoyaiwanami.comの過去の新着情報一覧
date: 2019-07-20 01:28:37 +0900
last_modified_at: 2019-07-12 01:28:37 +0900
permalink: /news/
---

# {{ page.title }}

{{ page.description }}

{% for news in site.categories.news %}
<hr>
{{ news.date_news }} {% if news.categories[1] %}<strong>[{{ news.categories[1] }}] </strong>{% endif %}

### {{ news.title }}

{{ news.description }}

[[詳細]]({{ news.url }})
{% endfor %}
