"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{9695:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),a=e(2791),c=e(470),u=e(3237),i="CastMovie_item__474OX",s="CastMovie_img__sCV5b",o="CastMovie_imgNotFound__K+HwK",p=e(184),f=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],f=t[1],l=(0,c.UO)().movieId;if((0,a.useEffect)((function(){u.M1(l).then((function(n){return f(n)})).catch(console.log)}),[l]),e)return(0,p.jsx)(p.Fragment,{children:e.length>0?(0,p.jsx)("ul",{children:e.slice(0,19).map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,p.jsxs)("li",{className:i,children:[a?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:e,className:s,width:"100"}):(0,p.jsx)("div",{className:o,children:"Image not found"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:(0,p.jsx)("b",{children:e})}),(0,p.jsxs)("p",{children:["Character: ",(0,p.jsx)("b",{children:r})]})]})]},t)}))}):(0,p.jsx)("div",{children:"No casts"})})}},3237:function(n,t,e){e.d(t,{GC:function(){return f},M1:function(){return d},Pg:function(){return l},rj:function(){return p},tx:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),s="82ebb658ef4c9a7c380738386a391c82",o="https://api.themoviedb.org/3/",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"trending/movie/day?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=695.97419625.chunk.js.map