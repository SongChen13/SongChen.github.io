(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{BVpu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(s("4gYi")),a=r(s("pNQN"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{settingStatus:[{name:"腾讯位置服务",type:"lbs_close",description:'配置KEY后，才可使用腾讯位置的WebServiceAPI服务，<a href="https://discuz.com/manual-admin/2.html#_2-10-1-%E8%85%BE%E8%AE%AF%E4%BD%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1" target="_blank">查看文档</a>',tag:"lbs",status:""}],key:""}},created:function(){this.loadStatus()},methods:{loadStatus:function(){var t=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);var s=e.Data,n=s.lbs;t.key=s.lbs.qqLbsKey,n.lbs?t.settingStatus[0].status=!0:t.settingStatus[0].status=!1}}))},statusSetting:function(t){var e=this;!t||this.key?this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"lbs",value:t,tag:"lbs"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"修改成功",type:"success"}),e.loadStatus()}})).catch((function(t){e.$message.error("修改失败")})):this.$message.error("请先配置key")},configClick:function(t){this.$router.push({path:"/admin/other-service-set-key",query:{type:t}})},importClick:function(){this.$router.push({path:"/admin/other-service-content"})}},components:{Card:n.default,CardRow:a.default}}},Pc0g:function(t,e,s){"use strict";s.r(e);var n=s("mU9U"),a=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},mU9U:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(s("QbLZ")),a=r(s("BVpu"));function r(t){return t&&t.__esModule?t:{default:t}}s("lpfh"),e.default=(0,n.default)({name:"other-service-set-view"},a.default)},nGHw:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"other-service-set-box"},[s("div",{staticClass:"other-service-set__default"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.settingStatus}},[s("el-table-column",{attrs:{prop:"date",label:"其他服务设置"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"pother-service-set-type-box"},["lbs_close"===e.row.type?s("i",{staticClass:"iconfont iconweizhi1 table-icon"}):t._e(),t._v(" "),"import"===e.row.type?s("i",{staticClass:"iconfont  icon-daoru1 table-icon daoru"}):t._e(),t._v(" "),s("div",{staticClass:"table-con-box"},[s("p",[t._v(t._s(e.row.name))]),t._v(" "),s("p",[s("span",{domProps:{innerHTML:t._s(e.row.description)}})])])])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.status?s("span",{staticClass:"iconfont iconicon_select"}):s("span",{staticClass:"iconfont iconicon_"})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"address",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return["lbs_close"===e.row.type?s("div",[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return t.configClick(e.row.tag)}}},[t._v("配置")]),t._v(" "),e.row.status?s("el-button",{attrs:{size:"mini"},nativeOn:{click:function(e){return e.preventDefault(),t.statusSetting(!1)}}},[t._v("关闭")]):s("el-button",{attrs:{size:"mini"},nativeOn:{click:function(e){return e.preventDefault(),t.statusSetting(!0)}}},[t._v("开启")])],1):s("div",[s("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.importClick()}}},[t._v("配置")])],1)]}}])})],1)],1)])},a=[]},ucIA:function(t,e,s){"use strict";s.r(e);var n=s("nGHw"),a=s("Pc0g");for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);var i=s("KHd+"),o=Object(i.a)(a.default,n.a,n.b,!1,null,null,null);e.default=o.exports}}]);