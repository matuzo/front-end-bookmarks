---
title: multiple
short_desc: "Enables form controls to accept one or more values."
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title | slug }}/index.html
definition:
  text: "The multiple attribute is a boolean attribute. If the attribute is present, then the select element represents a control for selecting zero or more options from the list of options."
  cite:
    text: "4.11.4. The dialog element"
    url: https://www.w3.org/TR/html52/single-page.html#the-select-element
links: "multiple"
related:
  - 'html.select.selectpoison2'
---

<h3><span>Code sample</span></h3>

```html
<label for="color">Select colors:</label>
<select id="color" multiple>
  <option value="red"> Red </option>
  <option value="green"> Green </option>
  <option value="blue"> Blue </option>
</select>
```
