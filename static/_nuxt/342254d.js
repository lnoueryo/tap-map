(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{535:function(e,t,r){var content=r(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("c3ce7f56",content,!0,{sourceMap:!1})},615:function(e,t,r){"use strict";r(535)},616:function(e,t,r){var n=r(27)(!1);n.push([e.i,".main-container[data-v-0dbfc38c]{height:100vh;max-height:calc(100vh - 238px);max-height:calc(var(--vh, 1vh)*100 - 238px);background-color:#fff;color:#000;overflow-x:hidden;overflow-y:scroll}.main-container .centering[data-v-0dbfc38c]{display:flex;align-items:center;height:100%}.url-box[data-v-0dbfc38c]{text-align:center;position:relative;bottom:0;font-size:14px;word-break:break-all;font-weight:700;background-color:#fff;padding-right:5px;padding-top:3px}",""]),e.exports=n},731:function(e,t,r){"use strict";r.r(t);r(11),r(8),r(7),r(18),r(6),r(19);var n=r(1),c=(r(21),r(0)),o=r(101);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=c.a.extend({computed:f(f(f({},Object(o.b)("city",["selectedMarker"])),Object(o.b)("info",["cityWikiInfo"])),{},{URL:function(){var e="https://ja.wikipedia.org/wiki/"+this.selectedMarker.name;return this.selectedMarker.name?e:null}})}),v=(r(615),r(70)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"main-container"},[e.cityWikiInfo?r("div",{domProps:{innerHTML:e._s(e.cityWikiInfo)}}):r("div",{staticClass:"centering"},[r("div",[e._v("地図をクリックして町情報を取得しましょう")])])]),e._v(" "),r("div",{staticClass:"url-box"},[r("a",{attrs:{href:e.URL,target:"_blank"}},[e._v(e._s(e.URL))])])])}),[],!1,null,"0dbfc38c",null);t.default=component.exports}}]);