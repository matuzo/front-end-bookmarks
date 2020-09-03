---
title: ":focus-visible"
title_clean: focus-visible
short_desc: "Applies if the user agent determines via heuristics that the focus should be made evident."
tags:
  - css
  - selectors
  - entry
permalink: css/selectors/{{ title_clean | slug }}/index.html
definition:
  text: "The :focus-visible pseudo-class applies while an element matches the :focus pseudo-class and the user agent determines via heuristics that the focus should be made evident on the element."
  cite:
    text: "9.4. The Focus-Indicated Pseudo-class: :focus-visible"
    url: https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo
links: "focusvisible"
date: 2020-09-03
sm_img: images/sm/sm_focusvisible.jpg
---

<h2 class="h3"><span>Code sample</span></h2>

```css
*:focus-visible {
  outline: 2px solid #F0F;
}
```
