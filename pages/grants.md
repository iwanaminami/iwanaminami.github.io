---
layout: page
title: "競争的研究資金"
description: これまでの競争的研究資金の一覧
date: 2019-07-20 01:28:37 +0900
last_modified_at: 2019-07-12 01:28:37 +0900
permalink: /grants/
---

{{ page.description }}

## 競争的研究資金

<table>
  {% for grant in site.data.grants %}
  <tr class="achievements-table">
    <th>[{{ grant.order }}]</th>
    <td>{{ grant.title }}, {{ grant.content }}, {{ grant.period }}, 代表者：{{ grant.manager }}, {{ grant.amount }}.</td>
  </tr>
  {% endfor %}
</table>
