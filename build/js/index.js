"use strict";var _createClass=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function sum(e,n){}function reduce(e,n){console.log(e-n)}sum(102,6),setTimeout(function(){},2e3),reduce(209,0);var Box=function(){function t(e,n){_classCallCheck(this,t),this.x=e,this.y=n}return _createClass(t,[{key:"toStrin",value:function(){console.log(this.x+",")}}]),t}(),box=new Box(2,3);Box.toString();