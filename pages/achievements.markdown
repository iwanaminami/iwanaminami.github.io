---
layout: page
permalink: /achievements
title: Achievements
list_reverse: true
---

## Pre-prints

<ol reversed>
{% assign preprints = site.data.preprints | where: "published", "false" %}
{% for article in preprints %}
  <li>
    <p>
      <strong>{{ article.title }}</strong><br>{{ article.date | date:"%b %-d, %Y" }}<br><a href="{{ article.url }}">{{ article.url }}</a>
    </p>
  </li>
{% endfor %}
</ol>

## Publications

<ol reversed>
{% for article in site.data.articles %}
 <li>
   <p>
   {% if article.title %}
   <strong>{{ article.title }}</strong><br>
   {% endif %}
   {% if article.authors %}
   {{ article.authors }}<br>
   {% endif %}
   {% if article.journal %}
   <strong><i>{{ article.journal }}</i></strong>
   {% if article.page %}
   {{ article.page }}
   {% endif %}
   <br>
   {% endif %}
   {% if article.publisher %}
   {{ article.publisher }}
   {% endif %}
   {% if article.year %}
   ({{ article.year }})<br>
   {% endif %}
   {% if article.doi %}
   DOI: <a href="{{ article.url }}" target="_blank">{{ article.doi }}</a>
   {% endif %}
   </p>
 </li>
{% endfor %}
</ol>


### Reviews, Books

<ol reversed>
{% for article in site.data.reviews %}
  <li>
    <p>
      {% if article.authors %}
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
    </p>
  </li>
{% endfor %}
</ol>

### 日本語文献

<ol reversed>
{% for article in site.data.jparticles %}
  <li>
   <p>
     {% if article.authors %}
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
     {% endif %}
   </p>
  </li>
{% endfor %}
</ol>


## Prizes

<ol reversed>
{% for article in site.data.prize %}
  <li>
    <p>
      {% if article.name %}
      <strong>{% if article.website %}<a href="{{ article.website }}">{{ article.name }}</a>{% else %}{{ article.name }}{% endif %}</strong>,
      {% endif %}
      {% if article.date %}
      {{ article.date | date: "%Y年%-m月%-d日" }},
      {% endif %}
      {% if article.organizer %}
      {{ article.organizer }}
      {% endif %}
    </p>
  </li>
{% endfor %}
</ol>


## Presentations

### International conferences
{:id="international_presentations"}

<ol reversed>
{% for article in site.data.presentations.international %}
  <li>
    <p>
      {% if article.title %}
      <strong>{{ article.title }}.</strong>
      {% endif %}
      {% if article.authors %}
      {{ article.authors }}.
      {% endif %}
      {% if article.conference %}
      {% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}.
      {% endif %}
      {% if article.organizer %}
      Organizer: {{ article.organizer }}.
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
      {% if article.date %}発表日：{{ article.date | date: "%B %-d, %Y" }}{% if article.start %} /{% endif %}{% endif %}
      {% if article.start %}開催日：{{ article.start | date: "%B %-d, %Y" }}{% if article.end %} - {{ article.end | date: "%B %-d, %Y" }}{% endif %}{% endif %}.
      {% endif %}
    </p>
  </li>
{% endfor %}
</ol>

### Domestic conferences

<ol reversed>
{% for article in site.data.presentations.domestic %}
  <li>
    <p>
      {% if article.title %}
      <strong>{{ article.title }}.</strong>
      {% endif %}
      {% if article.authors %}
      {{ article.authors }}.
      {% endif %}
      {% if article.conference %}
      {% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}.
      {% endif %}
      {% if article.organizer %}
      主催者: {{ article.organizer }}.
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
      {% if article.date %}発表日：{{ article.date | date: "%B %-d, %Y" }}{% if article.start %} /{% endif %}{% endif %}
      {% if article.start %}開催日：{{ article.start | date: "%B %-d, %Y" }}{% if article.end %} - {{ article.end | date: "%B %-d, %Y" }}{% endif %}{% endif %}.
      {% endif %}
    </p>
  </li>
{% endfor %}
</ol>



### Seminars

<ol reversed>
{% for article in site.data.presentations.seminar %}
  <li>
    <p>
      {% if article.title %}
      <strong>{{ article.title }}.</strong>
      {% endif %}
      {% if article.authors %}
      {{ article.authors }}.
      {% endif %}
      {% if article.conference %}
      {% if article.website %}<a href="{{ article.website }}">{{ article.conference }}</a>{% else %}{{ article.conference }}{% endif %}.
      {% endif %}
      {% if article.organizer %}
      主催者: {{ article.organizer }}.
      {% endif %}
      {% if article.place or article.date or article.start or article.end %}
      {% if article.place %}開催場所：{{ article.place }}{% if article.date or article.start %} /{% endif %}{% endif %}
      {% if article.date %}発表日：{{ article.date | date: "%B %-d, %Y" }}{% if article.start %} /{% endif %}{% endif %}
      {% if article.start %}開催日：{{ article.start | date: "%B %-d, %Y" }}{% if article.end %} - {{ article.end | date: "%B %-d, %Y" }}{% endif %}{% endif %}.
      {% endif %}
    </p>
  </li>
{% endfor %}
</ol>
