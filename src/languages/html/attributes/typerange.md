---
title: 'type="range"' 
title_clean: 'typerange' 
short_desc: "Represents a control for setting the element’s value to a string representing a number."
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title_clean | slug }}/index.html
definition:
  text: "The input element represents a control for setting the element’s value to a string representing a number, but with the caveat that the exact value is not important, letting user agents provide a simpler interface than they do for the Number state."
  cite:
    text: "4.10.5.1.13. Range state (type=range)"
    url: "https://www.w3.org/TR/html52/sec-forms.html#range-state-typerange"
links: "typerange"
date: 2020-05-25
sm_img: images/sm/sm_range.jpg
---

<h2 class="h3"><span>Code sample</span></h2>

```html
<label for="steps">Steps</label>
<input id="steps" type="range" min="100" max="700" step="10">
```
