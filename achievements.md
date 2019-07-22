---
layout: page
title: "研究業績一覧"
description: これまでの研究業績の一覧
date: 2019-07-20 01:28:37 +0900
last_modified_at: 2019-07-12 01:28:37 +0900
permalink: /achievements/
---

# {{ page.title }}

{{ page.description }}

## 原著論文
{:id="achievements_articles"}

<table>
{% for article in site.data.articles %}
  <tr class="achievements-table">
    <th>[{{ article.order }}]</th>
    <td>{% if article.authors %}
    {{ article.authors }}.
    {% endif %}
    {% if article.title %}
    {{ article.title }}.
    {% endif %}
    {% if article.journal %}
    {{ article.journal }}.
    {% endif %}
    {% if article.page %}
    {{ article.page }}.
    {% endif %}
    {% if article.publisher %}
    {{ article.publisher }}.
    {% endif %}
    {% if article.year %}
    ({{ article.year }}).
    {% endif %}
    {% if article.doi %}
    DOI: <a href="{{ article.url }}" target="_blank">{{ article.doi }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>

<hr>

## 総説
{:id="achievements_reviews"}

<table>
{% for article in site.data.reviews %}
  <tr class="achievements-table">
    <th>[{{ article.order }}]</th>
    <td>{% if article.authors %}
    {{ article.authors }}.
    {% endif %}
    {% if article.title %}
    {{ article.title }}.
    {% endif %}
    {% if article.journal %}
    {{ article.journal }}.
    {% endif %}
    {% if article.page %}
    {{ article.page }}.
    {% endif %}
    {% if article.publisher %}
    {{ article.publisher }}.
    {% endif %}
    {% if article.year %}
    ({{ article.year }}).
    {% endif %}
    {% if article.doi %}
    DOI: <a href="{{ article.url }}" target="_blank">{{ article.doi }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>

<hr>

## 日本語論文
{:id="achievements_jparticles"}

<table>
{% for article in site.data.jparticles %}
  <tr class="achievements-table">
    <th>[{{ article.order }}]</th>
    <td>{% if article.authors %}
    {{ article.authors }}.
    {% endif %}
    {% if article.title %}
    {{ article.title }}.
    {% endif %}
    {% if article.journal %}
    {{ article.journal }}.
    {% endif %}
    {% if article.page %}
    {{ article.page }}.
    {% endif %}
    {% if article.publisher %}
    {{ article.publisher }}.
    {% endif %}
    {% if article.year %}
    ({{ article.year }}).
    {% endif %}
    {% if article.doi %}
    DOI: <a href="{{ article.url }}" target="_blank">{{ article.doi }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>
