---
layout: default
title: People
permalink: /people/
---
{%- for i in site.data.people -%}
{%- if i.members.size > 0 -%}
## {{ i.title }}
<table style="table-layout:fixed; width:100%; border: none;">
<tbody style="background: none;">
<tr style="background: none;">
{% assign k = 0 -%}
{%- for j in i.members -%}
{%- if j.img -%}
{%- capture img -%}{{ j.img }}{%- endcapture -%}
{%- else -%}
{%- capture img -%}/assets/images/people/null.jpg{%- endcapture -%}
{%- endif -%}
{%- capture name -%}{{ j.name }}{%- endcapture -%}
{%- capture link -%}{{ j.link }}{%- endcapture -%}
{%- capture affiliation -%}{{ j.affiliation }}{%- endcapture -%}
{%- include person.html img=img name=name link=link affiliation=affiliation -%}
{%- assign k = k | plus:1 -%}
{%- if k == 4 -%}
</tr>
{% unless forloop.last %}
<tr style="background: none;">
{% endunless %}
{%- assign k = 0 -%}
{%- endif -%}
{%- endfor -%}
{%- if k > 0 -%}
</tr>
{% endif -%}
</tbody>
</table>
{%- endif -%}
{%- endfor -%}
