---
title: content
short_desc: "Dictates what is rendered inside an element or pseudo-element."
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "The content property dictates what is rendered inside an element or pseudo-element."
  cite:
    text: "1. Inserting and replacing content with the content property"
    url: https://drafts.csswg.org/css-content-3/#content-property
links: "content"
date: 2020-06-02
sm_img: images/sm/sm_content.jpg
---

<h2 class="h3"><span>Code sample</span></h2>

```css
a::after {
  content: " (" attr(href) ")"; 
}
```

