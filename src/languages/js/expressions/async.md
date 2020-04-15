---
title: async
short_desc: "Defines async functions inside expressions."
tags:
  - js
  - expressions
  - entry
permalink: js/expressions/{{ title | slug }}/index.html
definition:
  text: "The async function keyword can be used to define async functions inside expressions."
  cite:
    text: "async function expression (MDN)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async
links: "async"
date: 2020-04-13
---

<h2 class="h3"><span>Code sample</span></h2>

```js
async function f3() {
  var y = await 20;
  console.log(y); // 20
}
```
