---
title: ":nth-last-child()"
short_desc: "Represents an element that has an+b-1 siblings after it in the document tree."
tags:
  - css
  - selectors
  - entry
permalink: css/selectors/{{ title | slug }}/index.html
definition:
  text: "The :nth-last-child(an+b) pseudo-class notation represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n."
  cite:
    text: "6.6.5.3. :nth-last-child() pseudo-class"
    url: https://www.w3.org/TR/selectors-3/#nth-last-child-pseudo
links: "nthlastchild"
---

<h3><span>Code sample</span></h3>

```css
li:nth-last-child(2n) {
  border: 5px solid fuchsia;
}
```

