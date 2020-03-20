---
title: 'type="number"' 
title_clean: 'typenumber' 
short_desc: "A control for setting the element’s value to a string representing a number."
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title_clean | slug }}/index.html
definition:
  text: "The input element represents a control for setting the element’s value to a string representing a number."
  cite:
    text: "4.10.5.1.12. Number state (type=number)"
    url: https://www.w3.org/TR/html52/single-page.html#number-state-typenumber
links: "typenumber"
---

<h3><span>Code sample</span></h3>

```html
<label>
  How much do you want to charge? 
  $<input type=number min=0 step=0.01 name=price>
</label>
```
