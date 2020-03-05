---
title: HTML
layout: base.njk
permalink: html/index.html
tags:
  - nav
---

<p>
  Articles and talks about HTML elements and attributes.
</p>

<h2><span>Elements</span></h2>

<ol class="link-list">
{% for page in collections.element %}
  <li>
    <a href="{{ page.url }}" class="link-list__link">{{ page.data.title }}</a>
  </li>
{% endfor %}
</ol>


<h2><span>Attributes</span></h2>

<ol class="link-list">
{% for page in collections.attribute %}
  <li>
    <a href="{{ page.url }}" class="link-list__link">{{ page.data.title }}</a>
  </li>
{% endfor %}
</ol>
