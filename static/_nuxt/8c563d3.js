(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{432:function(t,o,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("6ea41650",content,!0,{sourceMap:!1})},450:function(t,o,n){"use strict";n(432)},451:function(t,o,n){var e=n(27)(!1);e.push([t.i,".bottom-bar[data-v-5db23d22]{position:absolute;right:0;left:0;top:100vh;z-index:2;color:#000;background-color:#fff;transition:all .5s;bottom:0}.mw-parser-output[data-v-5db23d22]{position:relative;z-index:10;background-color:#fff;margin:auto}.hidden-frame[data-v-5db23d22],.w100[data-v-5db23d22]{width:100%}@media screen and (max-width:500px){.bottom-bar[data-v-5db23d22]{position:fixed;z-index:5}}",""]),t.exports=e},454:function(t,o,n){"use strict";n.r(o);var e={props:["show","difference"],data:function(){return{translateY:0,navStyle:{height:0,transform:"",transition:"all .5s",zIndex:0},componentStyle:{height:"initial",transition:"all .5s",overflowY:"hidden",overflowX:"hidden"},position:!1,component:this.$refs.component}},computed:{transform:function(){return{transform:"translateY(".concat(this.translateY,"px)"),transition:"all .5s"}}},watch:{},methods:{upWiki:function(){this.position=!0},downWiki:function(){this.$refs.component.scrollTop=0,this.position=!1},fade:function(){this.$refs.component.scrollTop=0,this.position=!1,this.$emit("hide")},vh:function(t){return.01*window.innerHeight*t+"px"}}},r=(n(450),n(70)),d=n(82),l=n.n(d),c=n(413),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("nav",{staticClass:"bottom-bar",style:t.position?{top:t.show?"0":"100vh",overflowY:"scroll"}:{top:t.show?""+t.vh(85):"100vh",overflowY:"initial"}},[n("div",{staticClass:"hidden-frame"},[t.show?n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mx-2 w100"},[t.position?n("v-btn",{attrs:{block:""},on:{click:t.downWiki}},[t._v("down")]):n("v-btn",{attrs:{block:""},on:{click:t.upWiki}},[t._v("up")])],1),t._v(" "),n("div",{staticClass:"mx-2 w100"},[n("v-btn",{attrs:{block:""},on:{click:t.fade}},[t._v("delete")])],1)]):t._e(),t._v(" "),n("div",{ref:"component",style:t.componentStyle},[t._t("default")],2)])])])}),[],!1,null,"5db23d22",null);o.default=component.exports;l()(component,{VBtn:c.a})}}]);