/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapse.js
class Collapse {
  constructor(container) {
    this.container = container;
    this.button = this.container.querySelector('.collapse_button');
  }
  init() {
    this.button.addEventListener('click', event => this.getTextBlock(event));
  }
  getTextBlock(event) {
    event.preventDefault();
    this.container.querySelector('.collapse_container').classList.toggle('active');
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector('.container');
const collapse = new Collapse(container);
collapse.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;