/*! (C) Andrea Giammarchi Mit Style License */
define(function(){(function(e){"use strict";function v(e,t,n){w(this,e,t,n)}function m(){S.call(this),this._stopImmediatePropagation()}function g(e){return{configurable:!0,value:e}}function y(e){return function(){return s(this,u&&"dispatchEvent"in this?l:c)[e].apply(this,arguments)}}function b(e,t,n){t in e||(e[t]=n)}function w(e,t,n,r){b(e,"timeStamp",Date.now());for(var i in r)e[i]=r[i];b(e,"type",n),b(e,"currentTarget",t),b(e,"target",t),r&&b(e,"data",r)}function E(e){return e._active=!0,e._stopImmediatePropagation=e.stopImmediatePropagation,e.stopImmediatePropagation=m,e}function S(){i(this,"_active",h)}function x(e,t,n){typeof e=="function"?e.apply(t,n):e.handleEvent.apply(e,n)}function T(e,t,n){typeof e=="function"?e.call(t,n):e.handleEvent(n)}function N(e){return T(e,this.target,this),this._active}function C(e){e.apply(this.context,this.arguments)}function k(e){return T(e,this.context,this.event),this.event._active}if(e.eddy)return;var t="_@eddy:"+Math.random(),n=e.Object,r=n.create,i=n.defineProperty,s=n.defineProperties,o=e.Node||e.Element||e.HTMLElement,u=!!o,a=g(function(n){var i=this[t]||d.get(this)||(d.set(this,r(null)),d.get(this)),s=i[t]||(i[t]={m:[],b:[]}),o=s.m.indexOf(n);return o<0?s.b[s.m.push(n)-1]=n.bind(this):s.b[o]}),f=g(function(t,n,r){var i=this;return i.on(t,function s(){i.off(t,s,r),x(n,i,arguments)},r)}),l={boundTo:a,off:g(function(t,n,r){return this.removeEventListener(t,n,!!r),this}),on:g(function(t,n,r){return this.addEventListener(t,n,!!r),this}),once:f,trigger:g(function(n,r){var i=typeof n=="string",s=i?n:(r=n).type,o=(this.ownerDocument||this.document||e.document).createEvent("Event");return o.initEvent(s,r&&r.bubbles||1,r&&r.cancelable||1),w(o,this,s,i&&r),this.dispatchEvent(o),this})},c={boundTo:a,emit:g(function(n){var r=this[t][n];return r&&r.forEach(C,{arguments:(r.shift.call(arguments),arguments),context:this}),this}),off:g(function(n,r){var i=this[t],s=i[n],o;return s&&(o=s.indexOf(r),-1<o&&(s.splice(o,1),s.length||delete i[n])),this}),on:g(function(n,r){var i=this[t],s=i[n]||(i[n]=[]);return s.indexOf(r)<0&&s.push(r),this}),once:f,trigger:g(function(n,r){var i=this[t],s=typeof n=="string",o=i[s?n:n.type];return o&&o.every(k,{event:s?new v(this,n,r):E(n),context:this}),this})},h={value:!1},p=e.WeakMap,d;u&&(d=p?new p:{get:function(e){return e[t]},set:function(e,n){i(e,t,g(n))}}),i(e,"eddy",{value:!0}),s(v.prototype,{_active:g(!0),stopImmediatePropagation:g(S)}),i(c,t,{enumerable:!0,get:function(){return{value:r(null)}}}),s(n.prototype,{boundTo:g(y("boundTo")),emit:g(y("emit")),handleEvent:g(y("trigger")),off:g(y("off")),on:g(y("on")),once:g(y("once")),trigger:g(y("trigger"))})})(typeof global=="undefined"?window:global)});