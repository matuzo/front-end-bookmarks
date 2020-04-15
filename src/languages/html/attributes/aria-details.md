---
title: aria-details
short_desc: "Identifies the element that provides a detailed, extended description for the object."
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title | slug }}/index.html
definition:
  text: "Identifies the element that provides a detailed, extended description for the object."
  cite:
    text: "aria-details (property)"
    url: https://www.w3.org/TR/wai-aria/#aria-details
links: "ariadetails"
date: 2020-04-10
---

<h2 class="h3"><span>Code sample</span></h2>

```html
<img src="pythagorean.jpg" alt="Pythagorean Theorem" aria-details="det">
<details id="det">
  <summary>Example</summary>
  <p>
    The Pythagorean Theorem is a relationship in Euclidean Geometry between the three sides of
    a right triangle, where the square of the hypotenuse is the sum of the squares of the two
    opposing sides.
  </p>
</details>
```
