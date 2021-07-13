"use strict";

/* ======= Highlight.js Plugin ======= */ 
/* Ref: https://highlightjs.org/usage/ */ 
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});