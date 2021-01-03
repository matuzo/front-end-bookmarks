---
title: content-visibility
short_desc: "Controls whether or not an element renders its contents at all."
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "The content-visibility property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed."
  cite:
    text: "4. Suppressing An Element’s Contents Entirely: the content-visibility property"
    url: https://drafts.csswg.org/css-contain/#content-visibility
links: "content-visibility"
date: 2021-01-03
sm_img: images/sm/sm_contentvisibility.jpg
---

<h2 class="h3"><span>Code sample</span></h2>

```css
section {
  content-visibility: hidden;
}
```
