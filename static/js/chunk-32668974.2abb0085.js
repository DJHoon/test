(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32668974"],{"00e1":function(t,e,n){},"159d":function(t,e,n){"use strict";n("2b52")},"2b52":function(t,e,n){},5987:function(t,e,n){"use strict";n("00e1")},"9a69":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"order-index"},[n("div",{staticClass:"header acea-row"},[n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderList/unPaid"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.unpaidCount))]),t._v(" "),n("div",[t._v("待付款")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderList/notShipped"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.unshippedCount))]),t._v(" "),n("div",[t._v("待发货")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderList/spike"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.receivedCount))]),t._v(" "),n("div",[t._v("待收货")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderList/toBeWrittenOff"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.verificationCount))]),t._v(" "),n("div",[t._v("待核销")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderList/refunding"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.refundCount))]),t._v(" "),n("div",[t._v("退款")])])],1),t._v(" "),n("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"list acea-row"},[n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/price/today"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.todayPrice))]),t._v(" "),n("div",[t._v("今日成交额")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/price/yesterday"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.proPrice))]),t._v(" "),n("div",[t._v("昨日成交额")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/price/month"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.monthPrice))]),t._v(" "),n("div",[t._v("本月成交额")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/order/today"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.todayCount))]),t._v(" "),n("div",[t._v("今日订单数")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/order/yesterday"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.proCount))]),t._v(" "),n("div",[t._v("昨日订单数")])]),t._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/javaMobile/orderStatisticsDetail/order/month"}},[n("div",{staticClass:"num"},[t._v(t._s(t.census.monthCount))]),t._v(" "),n("div",[t._v("本月订单数")])])],1)]),t._v(" "),n("statistics-data",{attrs:{list:t.list}}),t._v(" "),n("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span",{staticClass:"iconfont icon-shujutongji"}),t._v("数据统计\n    ")])}],a=n("f8b7"),s=n("bf4f"),o=n("b798"),c={name:"OrderIndex",components:{Loading:o["a"],statisticsData:s["a"]},props:{},data:function(){return{census:[],list:[],where:{page:1,limit:10},loaded:!1,loading:!1}},created:function(){n.e("chunk-2d0d6f43").then(n.t.bind(null,"756e",7))},mounted:function(){var t=this;this.getIndex(),this.getList(),this.$scroll(this.$refs.container,(function(){!t.loading&&t.getList()}))},methods:{getIndex:function(){var t=this;Object(a["n"])().then((function(e){t.census=e}),(function(e){t.$dialog.message(e.message)}))},getList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,Object(a["r"])(this.where).then((function(e){t.loading=!1,t.loaded=e.length<t.where.limit,t.list.push.apply(t.list,e),t.where.page=t.where.page+1}),(function(e){t.$dialog.message(e.message)}),300))}}},u=c,d=(n("159d"),n("2877")),l=Object(d["a"])(u,r,i,!1,null,"2215a1a0",null);e["default"]=l.exports},b798:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading&&!t.loaded?n("div",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem","font-size":"12px"}},[t.loading?[n("div",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("\n    正在加载中\n  ")]:[t._v("\n    上拉加载更多\n  ")]],2):t._e()},i=[],a={name:"Loading",props:{loaded:Boolean,loading:Boolean},created:function(){n.e("chunk-2d0d6f43").then(n.t.bind(null,"756e",7))}},s=a,o=n("2877"),c=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=c.exports},bf4f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container"},[n("div",{staticClass:"public-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"conter"},t._l(t.list,(function(e,r){return n("div",{key:r,staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"data"},[t._v(t._s(e.time))]),t._v(" "),n("div",{staticClass:"browse"},[t._v(t._s(e.count))]),t._v(" "),n("div",{staticClass:"turnover"},[t._v(t._s(e.price))])])})),0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span",{staticClass:"iconfont icon-xiangxishuju"}),t._v("详细数据\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav acea-row row-between-wrapper"},[n("div",{staticClass:"data"},[t._v("日期")]),t._v(" "),n("div",{staticClass:"browse"},[t._v("订单数")]),t._v(" "),n("div",{staticClass:"turnover"},[t._v("成交额")])])}],a=(n("f8b7"),{name:"statisticsData",props:{list:{type:Array,default:function(){return[]}}},components:{},data:function(){return{where:{page:1,limit:10},loaded:!1,loading:!1}},created:function(){n.e("chunk-2d0d6f43").then(n.t.bind(null,"756e",7))}}),s=a,o=(n("5987"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,"b6e74016",null);e["a"]=c.exports},f8b7:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"o",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"m",(function(){return l})),n.d(e,"l",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"v",(function(){return f})),n.d(e,"u",(function(){return _})),n.d(e,"n",(function(){return p})),n.d(e,"r",(function(){return h})),n.d(e,"s",(function(){return b})),n.d(e,"p",(function(){return g})),n.d(e,"q",(function(){return C})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return w})),n.d(e,"t",(function(){return O})),n.d(e,"j",(function(){return k}));var r=n("b775");function i(t){return Object(r["a"])({url:"/admin/store/order/list",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/admin/store/order/status/num",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/admin/store/order/list/data",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/admin/store/order/delete",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/admin/store/order/status/list",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/admin/store/order/info",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/admin/store/order/mark",method:"post",params:t})}function l(t){return Object(r["a"])({url:"/admin/store/order/send",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/admin/store/order/refund/refuse",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/admin/store/order/refund",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/admin/store/order/writeUpdate/".concat(t),method:"get"})}function _(t){return Object(r["a"])({url:"/admin/store/order/writeConfirm/".concat(t),method:"get"})}function p(){return Object(r["a"])({url:"/admin/store/order/statistics",method:"get"})}function h(t){return Object(r["a"])({url:"/admin/store/order/statisticsData",method:"get",params:t})}function b(t){return Object(r["a"])({url:"admin/store/order/update/price",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/admin/store/order/time",method:"get",params:t})}function C(){return Object(r["a"])({url:"/admin/store/order/sheet/info",method:"get"})}function j(t){return Object(r["a"])({url:"/admin/store/order/getLogisticsInfo",method:"get",params:t})}function w(){return Object(r["a"])({url:"/admin/pay/component/delivery/company/get/list",method:"get"})}function O(t){return Object(r["a"])({url:"/admin/store/order/video/send",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/admin/yly/print/".concat(t),method:"get"})}}}]);