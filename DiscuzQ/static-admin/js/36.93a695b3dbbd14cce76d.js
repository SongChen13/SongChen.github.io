(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+EMZ":function(e,t,o){"use strict";o.r(t);var r=o("Lr8I"),a=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=a.a},CtzB:function(e,t,o){"use strict";o.r(t);var r=o("vOGG"),a=o("+EMZ");for(var n in a)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(n);var s=o("KHd+"),c=Object(s.a)(a.default,r.a,r.b,!1,null,null,null);t.default=c.exports},"KHd+":function(e,t,o){"use strict";function r(e,t,o,r,a,n,s,c){var i,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=o,u._compiled=!0),r&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),s?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=i):a&&(i=c?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),i)if(u.functional){u._injectStyles=i;var d=u.render;u.render=function(e,t){return i.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,i):[i]}return{exports:e,options:u}}o.d(t,"a",(function(){return r}))},Lr8I:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(o("QbLZ")),a=n(o("YCy3"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)({name:"tencentCloudConfigCosView"},a.default)},YCy3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(o("4gYi")),a=n(o("pNQN"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{cosName:"",cosArea:"",cosDomainName:"",cosSignUrl:"",cosDocPreview:""}},methods:{submission:function(){var e=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"qcloud_cos_bucket_name",value:this.cosName,tag:"qcloud"},{key:"qcloud_cos_bucket_area",value:this.cosArea,tag:"qcloud"},{key:"qcloud_cos_cdn_url",value:this.cosDomainName,tag:"qcloud"},{key:"qcloud_cos_sign_url",value:this.cosSignUrl,tag:"qcloud"},{key:"qcloud_cos_doc_preview",value:this.cosDocPreview,tag:"qcloud"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"})}}))},getTencentCloudCon:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var o=t.Data;e.cosName=o.qcloud.qcloudCosBucketName,e.cosArea=o.qcloud.qcloudCosBucketArea,e.cosDomainName=o.qcloud.qcloudCosCdnUrl,e.cosSignUrl=o.qcloud.qcloudCosSignUrl,e.cosDocPreview=o.qcloud.qcloudCosDocPreview}}))}},created:function(){this.getTencentCloudCon()},components:{Card:r.default,CardRow:a.default}}},vOGG:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",{attrs:{header:"对象存储配置"}}),e._v(" "),o("Card",{attrs:{header:"名称："}},[o("CardRow",{attrs:{description:"填写存储桶基本配置中的空间名称"},scopedSlots:e._u([{key:"tail",fn:function(){return[o("a",{attrs:{href:"https://cloud.tencent.com/product/cos",target:"_blank"}},[e._v("未申请？点此申请")])]},proxy:!0}])},[o("el-input",{attrs:{clearable:""},model:{value:e.cosName,callback:function(t){e.cosName=t},expression:"cosName"}})],1)],1),e._v(" "),o("Card",{attrs:{header:"地域："}},[o("CardRow",{attrs:{description:"填写存储桶基本配置中的所属地域，例如：ap-beijing"}},[o("el-input",{attrs:{clearable:""},model:{value:e.cosArea,callback:function(t){e.cosArea=t},expression:"cosArea"}})],1)],1),e._v(" "),o("Card",{attrs:{header:"访问域名："}},[o("CardRow",{attrs:{description:"填写存储桶基本配置中的访问域名"}},[o("el-input",{attrs:{clearable:""},model:{value:e.cosDomainName,callback:function(t){e.cosDomainName=t},expression:"cosDomainName"}})],1)],1),e._v(" "),o("Card",{attrs:{header:"启用签名："}},[o("CardRow",{attrs:{description:"开启后，请将存储桶访问权限改为私有读写，此时附件将使用签名加密方式，每次生成的链接仅一定周期内有效"}},[o("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:e.cosSignUrl,callback:function(t){e.cosSignUrl=t},expression:"cosSignUrl"}})],1)],1),e._v(" "),o("Card",{attrs:{header:"启用文档预览："}},[o("CardRow",{attrs:{description:"开启服务前，请先在对象存储中开启文档能力。启用后对于当前对象存储中的文档资源，可实现文档资源预览。"}},[o("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:e.cosDocPreview,callback:function(t){e.cosDocPreview=t},expression:"cosDocPreview"}})],1)],1),e._v(" "),o("Card",{staticClass:"footer-btn"},[o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.submission}},[e._v("提交")])],1)],1)},a=[]}}]);