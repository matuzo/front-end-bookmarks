---
title: ":not()"
title_clean: not
short_desc: "Represents an element that is not represented by its argument."
tags:
  - css
  - selectors
  - entry
permalink: css/selectors/{{ title_clean | slug }}/index.html
definition:
  text: "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument. "
  cite:
    text: "6.6.7. The negation pseudo-class"
    url: https://drafts.csswg.org/selectors-3/#negation
links: "not"
date: 2020-04-14
---

<h2 class="h3"><span>Code sample</span></h2>

```css
li:not(:last-child) {
  margin-botton: 1rem;
}
```
