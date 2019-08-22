---
layout: default
title: Publications
permalink: /publications/
---
{%- if site.data.publications.size > 0 -%}
{%- for publication in site.data.publications -%}
## [{{ publication.title }}]({{ publication.link }})
{{ publication.authors }}. {{ publication.venue }}, {{ publication.location }}, {{ publication.date }}.
{% endfor -%}
{%- endif -%}
