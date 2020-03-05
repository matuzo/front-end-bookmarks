---
title: select
short_desc: "short desc"
tags:
  - html
  - element
  - entry
permalink: html/elements/{{ title | slug }}/index.html
---

<blockquote>The select element represents a control for selecting amongst a set of options.
<cite><a href="https://www.w3.org/TR/html52/single-page.html#the-select-element">4.10.7. The select element</a></cite>
</blockquote>

<h2><span>Code sample</span></h2>

```html
<label for="color">Select color:</label>
<select id="color">
  <option value="red"> Red </option>
  <option value="green"> Green </option>
  <option value="blue"> Blue </option>
</select>
```

<h2><span>Links about <code>{{ title }}</code></span></h2>

<ol class="bookmarks">
  {% link "https://www.24a11y.com/2019/select-your-poison" %}
  {% link "https://www.24a11y.com/2019/select-your-poison-part-2/" %}
</ol>
