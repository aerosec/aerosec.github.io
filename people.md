---
layout: default
title: People
permalink: /people/
---
{%- for i in site.data.people -%}
{%- if i.members.size > 0 -%}
## {{ i.title }}
<div class="people-box">
{%- for j in i.members -%}
{% assign img = j.img | default: "/assets/images/people/null.png" %}
{%- include person.html img=img name=j.name link=j.link affiliation=j.affiliation -%}
{%- endfor -%}
</div>
{%- endif -%}
{%- endfor -%}
