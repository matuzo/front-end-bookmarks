---
title: video
short_desc: "For playing videos or movies, and audio files with captions."
tags:
  - html
  - elements
  - entry
permalink: html/elements/{{ title | slug }}/index.html
definition:
  text: "A video element is used for playing videos or movies, and audio files with captions."
  cite:
    text: "4.7.10. The video element"
    url: https://www.w3.org/TR/html52/semantics-embedded-content.html#the-video-element
links: "video"
---
<h3><span>Code sample</span></h3>

```html
<video controls width="480">
    <source src="video.webm" type="video/webm">
    <source src="video.mp4"  type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
```
