---
title: 'type="number"' 
title_clean: 'typenumber' 
short_desc: "short desc"
tags:
  - html
  - attribute
  - entry
permalink: html/attributes/{{ title_clean | slug }}/index.html
---

<blockquote>The input element represents a control for setting the element’s value to a string representing a number.
<cite><a href="https://www.w3.org/TR/html52/single-page.html#number-state-typenumber">4.10.5.1.12. Number state (type=number)</a></cite>
</blockquote>

<h2><span>Code sample</span></h2>

```html
<label>
  How much do you want to charge? 
  $<input type=number min=0 step=0.01 name=price>
</label>
```



<h2><span>Links about <code>{{ title }}</code></span></h2>

<ol class="bookmarks">
  {% link "https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/" %}
  {% link "https://bradfrost.com/blog/post/you-probably-dont-need-input-typenumber/" %}
</ol>
