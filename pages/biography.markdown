---
layout: page
permalink: /biography
title: Biography
---

![](/images/bio.jpg)
{: .bio_photo}

### 岩波 翔也（いわなみ しょうや）
{: .bio_name_jp}
IWANAMI, Shoya, Ph.D.
{: .bio_name_en}

{% for info in site.data.biography.basicinfo %}
{{ info.name }}
{: .bio_year}
{{ info.content }}
{: .bio_content}
{% endfor %}

## Education

{% for info in site.data.biography.education %}
{{ info.duration_to | date: "%Y年%-m月" }}
{: .bio_year}
{{ info.department }}
{: .bio_content}
{% endfor %}


## Work experience

{% for info in site.data.biography.work %}
{{ info.duration_from | date: "%Y年%-m月" }} - {% if info.duration_to %}{{ info.duration_to | date: "%Y年%-m月" }}{% else %}現在{% endif %}
{: .bio_year}
{{ info.department }}
{: .bio_content}
{% endfor %}


## 競争的研究資金等

<ol reversed>
{% for grant in site.data.grants %}

  <li>
    <p>
      {% if grant.url %}<a href="{{ grant.url }}">{% endif %}{{ grant.title }}{% if grant.url %}</a>{% endif %}<br>
      {{ grant.type }}<br>
      {{ grant.amount }}｜{{ grant.start | date: "%Y年%-m月" }} - {{ grant.end | date: "%Y年%-m月" }}｜代表者：{{ grant.manager }}
    </p>
  </li>

{% endfor %}
</ol>

## 主催したシンポジウムなど

<ol reversed>
{% for event in site.data.events %}

  <li>
    <p>
{% if event.website %}<a href = "{{ event.website }}">{% endif %}{{ event.name }}{% if event.website %}</a>{% endif %}<br>
{% if event.start %}{{ event.start | date: "%Y年%-m月%-d日" }}{% if event.end %} - {{ event.end | date: "%Y年%-m月%-d日" }}{% endif %}{% endif %}
    </p>
  </li>

{% endfor %}
</ol>
