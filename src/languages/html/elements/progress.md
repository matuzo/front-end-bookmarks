---
title: progress
short_desc: "short desc"
tags:
  - html
  - elements
  - entry
permalink: html/elements/{{ title | slug }}/index.html
---

<blockquote>The progress element represents the completion progress of a task.
<cite><a href="https://www.w3.org/TR/html52/single-page.html#the-progress-element">4.10.13. The progress element</a></cite>
</blockquote>

<h3><span>Links about <code>{{ title }}</code></span></h3>

<ol class="bookmarks">
  {% link "https://scottaohara.github.io/a11y_styled_form_controls/src/progress-bar/" %}
  {% link "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" %}
</ol>


<h3><span>Code sample</span></h3>

```html
  <label for="upload">Upload progress:</label>
  <progress id="upload" max="100" value="42"> 42% </progress>
```
