---
layout: page
permalink: /information
title: Information
---



<table class="">
  {% for post in site.categories.news %}
  <tr class="">
    <th>{{ post.date | date: "%Y.%m.%d" }}</th>
    <td>{{ post.description }}<a href="{{ post.url }}"> [詳細]</a></td>
  </tr>
  {% endfor %}
</table>
