(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{527:function(t,n,e){var content=e(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("3f851b25",content,!0,{sourceMap:!1})},610:function(t,n,e){"use strict";e(527)},611:function(t,n,e){var o=e(25)(!1);o.push([t.i,".active[data-v-19a58c0c]{background-color:rgba(83,83,83,.44314)}.table-row[data-v-19a58c0c]{display:flex;align-items:center}.town-name[data-v-19a58c0c]{width:15%}.columns[data-v-19a58c0c]{width:85%}.table-data[data-v-19a58c0c]{display:flex;align-items:center;justify-content:space-between}.property[data-v-19a58c0c]{width:15%}.column[data-v-19a58c0c]{width:12.25%}@media screen and (max-width:768px){.table-row[data-v-19a58c0c]{display:block}.columns[data-v-19a58c0c],.town-name[data-v-19a58c0c]{width:100%}.columns[data-v-19a58c0c]{display:flex;justify-content:space-around}.table-data[data-v-19a58c0c]{display:block;width:25%;padding:4px}.property[data-v-19a58c0c]{width:100%;display:flex;justify-content:center}.column[data-v-19a58c0c]{width:100%;max-height:24px;overflow:hidden}}",""]),t.exports=o},675:function(t,n,e){"use strict";e.r(n);e(201),e(97);var o={props:["analysisData"],data:function(){return{type:"家賃",sortValue:"mean",highLowSwitch:!0}},computed:{columnItems:function(){return[{title:"平均",value:"mean"},{title:"中央値",value:"50%"},{title:"標準偏差",value:"std"},{title:"最小値",value:"min"},{title:"最大値",value:"max"}]},units:function(){return["円","年","㎡"]},smp:function(){return this.$store.getters.windowSize.x<500},tablet:function(){return this.$store.getters.windowSize.x<768},towns:function(){var t=this,n=JSON.parse(JSON.stringify(this.analysisData.towns));return"町名"==this.type?n.sort((function(a,b){var n,e,o=null!==(n=null==a?void 0:a.count)&&void 0!==n?n:-1,c=null!==(e=null==b?void 0:b.count)&&void 0!==e?e:-1;return t.highLowSwitch?o<c?1:-1:o>c?1:-1})):n.sort((function(a,b){return t.highLowSwitch?(a.columns[0]?a.columns.find((function(n){return n.property==t.type}))[t.sortValue]:-1)<(b.columns[0]?b.columns.find((function(n){return n.property==t.type}))[t.sortValue]:-1)?1:-1:(a.columns[0]?a.columns.find((function(n){return n.property==t.type}))[t.sortValue]:-1)>(b.columns[0]?b.columns.find((function(n){return n.property==t.type}))[t.sortValue]:-1)?1:-1}))}},methods:{round:function(t){return Math.round(100*t)/100},roundPrice:function(t){return Math.round(t/100)/100},roundPercentage:function(t){return Math.round(1e4*t)/100},sortColumns:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"町名"==this.type&&(this.type="家賃"),this.sortValue=t,this.highLowSwitch=n},changeType:function(t){"町名"==this.type&&(this.sortValue="mean"),this.type=t}}},c=(e(610),e(70)),r=e(79),l=e.n(r),d=e(406),v=e(178),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.towns,(function(n,i){return e("div",{key:i},[i%6!=0||t.tablet?t._e():e("div",{staticClass:"d-flex align-center text-center py-4"},[e("div",{staticClass:"town-name",on:{click:function(n){t.type="町名"}}},[t._v("\n        町名"),e("br"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.highLowSwitch=!t.highLowSwitch,t.type="町名",t.sortValue=""}}},[e("v-icon",{style:t.highLowSwitch||"町名"!=t.type?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},attrs:{small:""}},[t._v("mdi-menu-down")])],1)],1),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"d-flex align-center justify-space-between pa-1"},[t._m(0,!0),t._v(" "),t._l(t.columnItems,(function(n,o){return e("div",{key:o,staticClass:"column pa-2",class:{active:t.sortValue==n.value},on:{click:function(e){return e.stopPropagation(),t.sortColumns(n.value)}}},[e("div",[t._v("\n              "+t._s(n.title)),e("br"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.sortColumns(n.value,!t.highLowSwitch)}}},[e("v-icon",{style:t.highLowSwitch||t.sortValue!=n.value?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"},attrs:{small:""}},[t._v("mdi-menu-down")])],1)],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"table-row text-center py-2"},[e("div",{staticClass:"town-name"},[e("div",[t._v(t._s(n.name))]),t._v(" "),e("div",[t._v(t._s(t.roundPercentage(n.count_ratio))+"%")])]),t._v(" "),e("div",{staticClass:"columns"},[t.tablet?e("div",{staticClass:"table-data pa-1"},[e("div",[t._v("種類")]),t._v(" "),t._l(t.columnItems,(function(n,o){return e("div",{key:o,staticClass:"column"},[e("div",[t._v(t._s(n.title))])])}))],2):t._e(),t._v(" "),t._l(n.columns,(function(n,o){return e("div",{key:o,staticClass:"table-data pa-1"},[e("div",{staticClass:"property",on:{click:function(e){return t.changeType(n.property)}}},[t._v(t._s(n.property))]),t._v(" "),t._l(t.columnItems,(function(c,r){return e("div",{key:r,staticClass:"column"},[e("div",[t._v(t._s("家賃"==n.property?t.roundPrice(n[c.value]):t.round(n[c.value]))+" "),"家賃"==n.property?e("span",[t._v("万")]):t._e(),t._v(t._s(t.units[o]))])])}))],2)}))],2)])])})),0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"property pa-2"},[t._v("種類"),e("br"),e("div")])}],!1,null,"19a58c0c",null);n.default=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})}}]);