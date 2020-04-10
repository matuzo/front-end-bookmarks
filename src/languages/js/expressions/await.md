---
title: await
short_desc: "Used to wait for a Promise."
tags:
  - js
  - expressions
  - entry
permalink: js/expressions/{{ title | slug }}/index.html
definition:
  text: "The await operator is used to wait for a Promise. It can only be used inside an async function."
  cite:
    text: "await (MDN)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
links: "await"
---

<h2 class="h3"><span>Code sample</span></h2>

```js
async function f3() {
  var y = await 20;
  console.log(y); // 20
}
```
