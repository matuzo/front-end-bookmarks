---
title: list-style-type
short_desc: "short desc"
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
---

<blockquote>Specifies the marker string, which is used to fill the list item’s marker when its content value is normal and there is no marker image. 
<cite><a href="https://www.w3.org/TR/css-lists-3/#text-markers">3.4. Text-based Markers: the list-style-type property</a></cite>
</blockquote>

<h3><span>Links about <code>{{ title }}</code></span></h3>

<ol class="bookmarks">
  {% link "https://www.matuzo.at/blog/heres-what-i-didnt-know-about-list-style-type/" %}
  {% link "https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type" %}
</ol>


<h3><span>Code sample</span></h3>

```css
ol {
  list-style-type: lower-roman;
}
```
