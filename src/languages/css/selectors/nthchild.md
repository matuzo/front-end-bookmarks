---
title: ":nth-child()"
title_clean: nth-child
short_desc: "Represents an element that has an+b-1 siblings before it in the document tree."
tags:
  - css
  - selectors
  - entry
permalink: css/selectors/{{ title_clean | slug }}/index.html
definition:
  text: "The :nth-child(an+b) pseudo-class notation represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n."
  cite:
    text: "6.6.5.2. :nth-child() pseudo-class"
    url: https://www.w3.org/TR/selectors-3/#nth-child-pseudo
links: "nthchild"
date: 2020-04-29
---

<h2 class="h3"><span>Code sample</span></h2>

```css
li:nth-child(2n) {
  border: 5px solid fuchsia;
}
```
