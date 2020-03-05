---
title: multiple
short_desc: "short desc"
tags:
  - html
  - attribute
  - entry
permalink: html/attributes/{{ title | slug }}/index.html
---

<blockquote>The multiple attribute is a boolean attribute. If the attribute is present, then the select element represents a control for selecting zero or more options from the list of options.
<cite><a href="https://www.w3.org/TR/html52/single-page.html#the-select-element">4.11.4. The dialog element</a></cite>
</blockquote>

<h2><span>Code sample</span></h2>

```html
<label for="color">Select colors:</label>
<select id="color" multiple>
  <option value="red"> Red </option>
  <option value="green"> Green </option>
  <option value="blue"> Blue </option>
</select>
```

<h2><span>Related links</span></h2>

<ol class="bookmarks">
  {% link "https://www.24a11y.com/2019/select-your-poison-part-2/" %}
</ol>
