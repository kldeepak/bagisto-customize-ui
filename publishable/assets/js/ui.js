!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("uPOf"),e.exports=n("HmaJ")},HmaJ:function(e,t){$((function(){var e='<i onclick="window.location = '+(history.length>1?"document.referrer;":"'"+window.location.origin+"/admin/dashboard'")+'" class="icon angle-left-icon back-link"></i>';$(".content-container .content-wrapper .page-header .page-title i").replaceWith(e)}))},uPOf:function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r,o,i,a,c){var u,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(e,t){return u.call(t),l(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:s}}({props:["baseUrl"],data:function(){return{referer:history.length>1?document.referrer:this.baseUrl}}},(function(){var e=this.$createElement;return(this._self._c||e)("a",{staticClass:"icon angle-left-icon back-link",attrs:{href:this.referer}})}),[],!1,null,null,null).exports;Vue.component("back-button",r)}});