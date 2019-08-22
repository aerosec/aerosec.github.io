---
layout: default
title: People
permalink: /people/
---
{%- if site.data.people.size > 0 -%}
{%- for i in site.data.people -%}
    {%- if i.members.size > 0 -%}
    <div>
        <h3>{{ i.title }}</h3>
        {%- for j in i.members -%}
            <div>
                <p>
                <a href="{{ j.link }}" target="_blank">{{ j.name }}</a>, {{ j.affiliation }}
                </p>
                <!-- <img src="{{ j.img }}" alt="{{ j.name }}"> -->
            </div>
        {%- endfor -%}
    </div>
    {%- endif -%}
{%- endfor -%}
{%- endif -%}
