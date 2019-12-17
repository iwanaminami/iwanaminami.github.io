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

[Google Scholar](https://scholar.google.co.jp/citations?user=Vt5AAPcAAAAJ&hl=ja&oi=ao)

## 出版物

### 原著論文
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
    DOI: <a href="{{ article.url }}">{{ article.doi }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>

### 総説
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
    DOI: <a href="{{ article.url }}">{{ article.doi }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>

### 日本語論文
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
    DOI: <a href="{{ article.url }}">{{ article.doi }}</a>.
    {% endif %}
    {% if article.repository %}
    <a href="{{ article.url }}">{{ article.repository }}</a>.
    {% endif %}</td>
  </tr>
{% endfor %}
</table>

<hr>

## 受賞等
{:id="prize"}

<table>
{% assign prize_count = site.data.prize.size %}
{% for article in site.data.prize %}
  <tr>
    <th>[{{ prize_count | plus: dec_prize }}]</th>
    <td>
      {% if article.name %}
      <strong>{% if article.website %}<a href="{{ article.website }}">{{ article.name }}</a>{% else %}{{ article.name }}{% endif %}</strong>,
      {% endif %}
      {% if article.date %}
      {{ article.date | date: "%Y年%-m月%-d日" }},
      {% endif %}
      {% if article.organizer %}
      {{ article.organizer }}
      {% endif %}
    </td>
  </tr>
<div class="d-none">{% decrement dec_prize %}</div>
{% endfor %}
</table>

<hr>

## 発表等
{:id="presentations"}

### 国際学会等
{:id="international_presentations"}

<table>
{% assign international_presentations = site.data.presentations.international.size %}
{% for article in site.data.presentations.international %}
  <tr>
    <th class="p-1 align-top text-center"><p class="m-0">[{{ international_presentations | plus: dec_international }}]</p></th>
    <td class="p-1">
      {% if article.title %}
      <p class="m-0 font-weight-bold">{{ article.title }}</p>
      {% endif %}
      {% if article.authors %}
      <p class="m-0">{{ article.authors }}</p>
      {% endif %}
      {% if article.conference %}
      <p class="m-0">{% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}</p>
      {% endif %}
      {% if article.organizer %}
      <p class="m-0">Organizer: {{ article.organizer }}</p>
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      <p class="m-0">
        {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
        {% if article.date %}発表日：{{ article.date | date: "%B %-d, %Y" }}{% if article.start %} /{% endif %}{% endif %}
        {% if article.start %}開催日：{{ article.start | date: "%B %-d, %Y" }}{% if article.end %} - {{ article.end | date: "%B %-d, %Y" }}{% endif %}{% endif %}
      </p>
      {% endif %}
    </td>
  </tr>
<div class="d-none">{% decrement dec_international %}</div>
{% endfor %}
</table>

### 国内学会等
{:id="domestic_presentations"}

<table>
{% assign domestic_presentations = site.data.presentations.domestic.size %}
{% for article in site.data.presentations.domestic %}
  <tr>
    <th class="p-1 align-top text-center"><p class="m-0">[{{ domestic_presentations | plus: dec_domestic }}]</p></th>
    <td class="p-1">
      {% if article.title %}
      <p class="m-0 font-weight-bold">{{ article.title }}</p>
      {% endif %}
      {% if article.authors %}
      <p class="m-0">{{ article.authors }}</p>
      {% endif %}
      {% if article.conference %}
      <p class="m-0">{% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}</p>
      {% endif %}
      {% if article.organizer %}
      <p class="m-0">主催者：{{ article.organizer }}</p>
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      <p class="m-0">
        {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
        {% if article.date %}発表日：{{ article.date | date: "%Y年%-m月%-d日" }}{% if article.start %} /{% endif %}{% endif %}
        {% if article.start %}開催日：{{ article.start | date: "%Y年%-m月%-d日" }}{% if article.end %} - {{ article.end | date: "%Y年%-m月%-d日" }}{% endif %}{% endif %}
      </p>
      {% endif %}
    </td>
  </tr>
<div class="d-none">{% decrement dec_domestic %}</div>
{% endfor %}
</table>

### セミナーなど
{:id="seminar_presentations"}

<table>
{% assign seminar_presentations = site.data.presentations.seminar.size %}
{% for article in site.data.presentations.seminar %}
  <tr>
    <th class="p-1 align-top text-center"><p class="m-0">[{{ seminar_presentations | plus: dec_seminar }}]</p></th>
    <td class="p-1">
      {% if article.title %}
      <p class="m-0 font-weight-bold">{{ article.title }}</p>
      {% endif %}
      {% if article.authors %}
      <p class="m-0">{{ article.authors }}</p>
      {% endif %}
      {% if article.conference %}
      <p class="m-0">{% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}</p>
      {% endif %}
      {% if article.organizer %}
      <p class="m-0">主催者：{{ article.organizer }}</p>
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      <p class="m-0">
        {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
        {% if article.date %}発表日：{{ article.date | date: "%Y年%-m月%-d日" }}{% if article.start %} /{% endif %}{% endif %}
        {% if article.start %}開催日：{{ article.start | date: "%Y年%-m月%-d日" }}{% if article.end %} - {{ article.end | date: "%Y年%-m月%-d日" }}{% endif %}{% endif %}
      </p>
      {% endif %}
    </td>
  </tr>
<div class="d-none">{% decrement dec_seminar %}</div>
{% endfor %}
</table>
