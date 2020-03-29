---
title: aria-describedby
short_desc: "Identifies the element (or elements) that describes the object. "
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title | slug }}/index.html
definition:
  text: "Identifies the element (or elements) that describes the object. "
  cite:
    text: "aria-describedby (property)"
    url: https://www.w3.org/TR/wai-aria/#aria-describedby
links: "ariadescribedby"
---

<h3><span>Code sample</span></h3>

```html
<button class="notifications" aria-describedby="notifications-desc">  
  Notifications
</button>  
<div role="tooltip" id="notifications-desc">View and manage notifications settings</div> 
```
