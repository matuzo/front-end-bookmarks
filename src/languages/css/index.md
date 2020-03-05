---
title: CSS
layout: base.njk
permalink: css/index.html
tags:
  - nav
---

<p>
  Articles and talks about CSS properties and selectors.
</p>

<h2><span>Properties</span></h2>

<ol class="link-list">
{% for page in collections.property %}
  <li>
    <a href="{{ page.url }}" class="link-list__link">{{ page.data.title }}</a>
  </li>
{% endfor %}
</ol>

<h2><span>Selectors</span></h2>

<ol class="link-list">
{% for page in collections.selector %}
  <li>
    <a href="{{ page.url }}" class="link-list__link">{{ page.data.title }}</a>
  </li>
{% endfor %}
</ol>
