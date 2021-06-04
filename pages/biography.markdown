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
