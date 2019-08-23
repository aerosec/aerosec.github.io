---
layout: default
title: People
permalink: /people/
---
{%- for i in site.data.people -%}
{%- if i.members.size > 0 -%}
# {{ i.title }}
{%- for j in i.members %}
[{{ j.name }}]({{ j.link }}), {{ j.affiliation }}
{% endfor -%}
{%- endif -%}
{%- endfor -%}
