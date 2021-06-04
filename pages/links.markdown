---
layout: page
permalink: /links
title: Links
---

{% for types in site.data.links %}
## {{ types.title }}

{% for links in types.links %}[{{ links.name }}]({{ links.url }})
{% if forloop.last != true %}/{% endif %}
{% endfor %}
{% endfor %}
