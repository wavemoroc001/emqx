webpackJsonp([22],{"9rJd":function(t,e){},LbE0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"help-view",components:{},data:function(){return{lang:window.localStorage.getItem("language")||"en"}},computed:{learnEnterprise:function(){return"zh"===this.lang?"https://www.emqx.com/zh/products/emqx":"https://www.emqx.com/en/products/emqx"},freeTrial:function(){return"zh"===this.lang?"https://www.emqx.com/zh/try?product=enterprise":"https://www.emqx.com/en/try?product=enterprise"},docsLink:function(){return"zh"===this.lang?"https://emqx.io/docs/zh/"+this.$store.state.systemVersion+"/":"https://emqx.io/docs/en/"+this.$store.state.systemVersion+"/"},faqLink:function(){return"zh"===this.lang?"https://emqx.io/docs/zh/"+this.$store.state.systemVersion+"/faq/faq.html":"https://emqx.io/docs/en/"+this.$store.state.systemVersion+"/faq/faq.html"}},methods:{}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"help-view"},[s("div",{staticClass:"page-title"},[t._v(t._s(t.$t("leftbar.help")))]),t._v(" "),s("div",{staticClass:"help-item"},[s("h3",[t._v(t._s(t.$t("help.quickStart")))]),t._v(" "),s("p",[t._v(t._s(t.$t("help.emqxDesc")))]),t._v(" "),s("a",{attrs:{target:"_blank",href:"https://github.com/emqx/emqx"}},[t._v("Github")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"help-item"},[s("h3",[t._v(t._s(t.$t("help.emqxEnterprise")))]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.$t("help.enterpriseDesc"))}}),t._v(" "),s("a",{attrs:{target:"_blank",href:t.learnEnterprise}},[t._v("\n      "+t._s(t.$t("oper.learnMore"))+"\n    ")]),t._v(" "),s("a",{attrs:{target:"_blank",href:t.freeTrial}},[t._v("\n      "+t._s(t.$t("help.freeTrial"))+"\n    ")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"help-item"},[s("h3",[t._v(t._s(t.$t("help.useDocs")))]),t._v(" "),s("p",[t._v(t._s(t.$t("help.docsDesc")))]),t._v(" "),s("a",{attrs:{target:"_blank",href:t.docsLink}},[t._v("\n      "+t._s(t.$t("help.forwardView"))+"\n    ")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"help-item"},[s("h3",[t._v("FAQ")]),t._v(" "),s("p",[t._v(t._s(t.$t("help.faqDesc")))]),t._v(" "),s("a",{attrs:{target:"_blank",href:t.faqLink}},[t._v("\n      "+t._s(t.$t("help.forwardFaq"))+"\n    ")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"help-item"},[s("h3",[t._v(t._s(t.$t("help.followUs")))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("a",{staticClass:"follow-link",attrs:{target:"_blank",href:t.$t("help.ytLink")}},[s("i",{staticClass:"iconfont icon-youtube"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://github.com/emqx/emqx"}},[e("i",{staticClass:"iconfont icon-git"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://twitter.com/emqtt"}},[e("i",{staticClass:"iconfont icon-tuite"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://emqx.slack.com/"}},[e("i",{staticClass:"iconfont icon-slack"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://stackoverflow.com/questions/tagged/emq"}},[e("i",{staticClass:"iconfont icon-stack-overflow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://groups.google.com/forum/#!forum/emqtt"}},[e("i",{staticClass:"iconfont icon-icons-google_groups"})])}]};var r=s("VU/8")(a,i,!1,function(t){s("9rJd")},null,null);e.default=r.exports}});