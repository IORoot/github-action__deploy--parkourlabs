var rml_gutenberg;rml_gutenberg=function(){var t={9113:function(t,e,r){"use strict";r.r(e);var n=r(5450),o=r.n(n),i=React,a=r.n(i),c=wp;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v(t);if(e){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g="real-media-library/gallery",b=c.blocks.registerBlockType,w=c.components.G,E=c.components.SVG,x=c.components.Path,O=c.components.ServerSideRender,L=c.components.PanelBody,_=c.components.RangeControl,S=c.components.ToggleControl,C=c.components.SelectControl,k=c.components.TreeSelect,j=c.components.Notice,P=c.components.Spinner,T=c.components.Button,R=c.components.withNotices,N=c.element.Component,G=c.element.Fragment,F=c.editor.InspectorControls,M=c.i18n.__,A=[{value:"attachment",label:M("Attachment Page")},{value:"media",label:M("Media File")},{value:"none",label:M("None")}],D=function(t){h(u,t);var e,r,n,i,c=m(u);function u(){var t;return f(this,u),(t=c.apply(this,arguments)).state={$busy:!0,tree:[]},t}return e=u,(r=[{key:"componentDidMount",value:(n=o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.rml.request({location:{path:"/tree"}});case 2:e=t.sent,(r=e.tree).unshift({id:-1,name:rmlOpts.others.lang.unorganized}),r.unshift({id:void 0,name:"-"}),this.setState({tree:r,$busy:!1});case 7:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"render",value:function(){var t=l({},this.props),e=this.state,r=e.$busy,n=e.tree;return r?a().createElement(P,null):a().createElement(k,l({label:rmlOpts.others.lang.folder},t,{tree:n}))}}])&&p(e.prototype,r),u}(N),I=function(t){h(r,t);var e=m(r);function r(){var t;return f(this,r),(t=e.apply(this,arguments)).setFid=function(e){return t.props.setAttributes({fid:+e})},t.setLinkTo=function(e){return t.props.setAttributes({linkTo:e})},t.setColumnsNumber=function(e){return t.props.setAttributes({columns:e})},t.toggleImageCrop=function(){return t.props.setAttributes({imageCrop:!t.props.attributes.imageCrop})},t.toggleCaptions=function(){return t.props.setAttributes({captions:!t.props.attributes.captions})},t.handleReload=function(){return t.props.setAttributes({lastEditReload:(new Date).getTime()})},t.render=function(){var e=t.props.attributes,r=e.fid,n=e.columns,o=void 0===n?3:n,i=e.imageCrop,c=e.captions,u=e.linkTo;return a().createElement(G,null,a().createElement(F,null,a().createElement(L,{title:M("Gallery Settings")},a().createElement(D,{value:r,onChange:t.setFid}),a().createElement(_,{label:M("Columns"),value:o,onChange:t.setColumnsNumber,min:"1",max:"8"}),a().createElement(S,{label:M("Crop Images"),checked:!!i,onChange:t.toggleImageCrop}),a().createElement(S,{label:M("Caption"),checked:!!c,onChange:t.toggleCaptions}),a().createElement(C,{label:M("Link To"),value:u,onChange:t.setLinkTo,options:A}),a().createElement(T,{isPrimary:!0,onClick:t.handleReload},rmlOpts.others.lang.reloadContent))),a().createElement(O,{block:g,attributes:e}),!r&&a().createElement(j,{status:"error",isDismissible:!1},a().createElement("p",null,rmlOpts.others.lang.gutenBergBlockSelect)))},t.state={refresh:(new Date).getTime()},t}return r}(N);b(g,{title:"Real Media Library Gallery",description:"Display folder images in a rich gallery.",icon:a().createElement(E,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a().createElement(x,{fill:"none",d:"M0 0h24v24H0V0z"}),a().createElement(w,null,a().createElement(x,{d:"M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z"}),a().createElement(x,{d:"M12 12l1 2 3-3 3 4H9z"}),a().createElement(x,{d:"M2 6v14l2 2h14v-2H4V6H2z"}))),category:"common",supports:{align:!0},attributes:{fid:{type:"number",default:0},columns:{type:"number",default:3},imageCrop:{type:"boolean",default:!0},captions:{type:"boolean",default:!0},linkTo:{type:"string",default:"none"},lastEditReload:{type:"number",default:0}},edit:R(I),save:function(){return null}})},5450:function(t,e,r){t.exports=r(6725)},6725:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",m={};function d(){}function v(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(j([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=g.prototype=d.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(9113)}();
//# sourceMappingURL=rml_gutenberg.pro.js.map