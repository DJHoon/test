(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf63085e"],{"0121":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small","label-width":"100px",inline:!0}},[a("el-form-item",{staticClass:"width100",attrs:{label:"时间选择："}},[a("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.dateLimit)}},model:{value:t.tableFrom.dateLimit,callback:function(e){t.$set(t.tableFrom,"dateLimit",e)},expression:"tableFrom.dateLimit"}},t._l(t.fromList.fromTxt,(function(e,i){return a("el-radio-button",{key:i,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选择门店："}},[a("el-select",{staticClass:"selWidth",attrs:{filterable:"",placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.storeId,callback:function(e){t.$set(t.tableFrom,"storeId",e)},expression:"tableFrom.storeId"}},t._l(t.storeSelectList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"关键字："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入姓名、电话、订单ID",size:"small",clearable:""},model:{value:t.tableFrom.keywords,callback:function(e){t.$set(t.tableFrom,"keywords",e)},expression:"tableFrom.keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"mt20"},[a("cards-data",{attrs:{"card-lists":t.cardLists}})],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":"","header-cell-style":{fontWeight:"bold"}}},[a("el-table-column",{attrs:{label:"订单号",prop:"orderId","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realName",label:"用户信息","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"推荐人信息","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.spreadInfo.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品信息","min-width":"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"right"}},[e.row.productList&&e.row.productList.length?a("div",{attrs:{slot:"reference"},slot:"reference"},t._l(e.row.productList,(function(e,i){return a("div",{key:i,staticClass:"tabBox acea-row row-middle",staticStyle:{"flex-wrap":"inherit"}},[a("div",{staticClass:"demo-image__preview mr10"},[a("el-image",{attrs:{src:e.info.image,"preview-src-list":[e.info.image]}})],1),t._v(" "),a("div",{staticClass:"text_overflow"},[a("span",{staticClass:"tabBox_tit mr10"},[t._v(t._s(e.info.productName+" | ")+t._s(e.info.sku?e.info.sku:"-"))]),t._v(" "),a("span",{staticClass:"tabBox_pice"},[t._v(t._s(e.info.price+" x "+e.info.payNum))])])])})),0):t._e(),t._v(" "),e.row.productList&&e.row.productList.length?a("div",{staticClass:"pup_card"},t._l(e.row.productList,(function(e,i){return a("div",{key:i,staticClass:"tabBox acea-row row-middle",staticStyle:{"flex-wrap":"inherit"}},[a("div",{},[a("span",{staticClass:"tabBox_tit mr10"},[t._v(t._s(e.info.productName+" | ")+t._s(e.info.sku?e.info.sku:"-"))]),t._v(" "),a("span",{staticClass:"tabBox_pice"},[t._v(t._s(e.info.price+" x "+e.info.payNum))])])])})),0):t._e()])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"payPrice",label:"实际支付","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"clerkName",label:"核销员","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"核销门店","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"支付状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("paidFilter")(e.row.paid)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.statusStr.value))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"下单时间","min-width":"150"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},s=[],l=a("6537"),o=a("0f56"),n={components:{cardsData:o["a"]},data:function(){return{storeSelectList:[],orderId:0,tableData:{data:[],total:0},listLoading:!0,tableFrom:{keywords:"",storeId:"",dateLimit:"",page:1,limit:20},timeVal:[],fromList:this.$constants.fromList,ids:"",cardLists:[]}},mounted:function(){this.storeList(),this.getList()},methods:{storeList:function(){var t=this,e={page:1,limit:999,status:"1",keywords:""};Object(l["f"])(e).then((function(e){t.storeSelectList=e.list}))},pageChangeLog:function(t){this.tableFromLog.page=t,this.getList()},handleSizeChangeLog:function(t){this.tableFromLog.limit=t,this.getList()},selectChange:function(t){this.tableFrom.date=t,this.tableFrom.page=1,this.timeVal=[],this.getList()},onchangeTime:function(t){this.timeVal=t,this.tableFrom.dateLimit=t?this.timeVal.join(","):"",this.tableFrom.page=1,this.getList()},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(l["b"])(this.tableFrom).then((function(t){e.tableData.data=t.list.list,e.tableData.total=t.list.total,e.cardLists=[{name:"订单数量",count:t.total,color:"#1890FF",class:"one",icon:"icondingdan"},{name:"订单金额",count:t.orderTotalPrice,color:"#A277FF",class:"two",icon:"icondingdanjine"},{name:"退款总单数",count:t.refundTotal,color:"#EF9C20",class:"three",icon:"icondingdanguanli"},{name:"退款总金额",count:t.refundTotalPrice,color:"#1BBE6B",class:"four",icon:"iconshangpintuikuanjine"}],e.listLoading=!1})).catch((function(){e.listLoading=!1}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()}}},r=n,c=(a("45ae"),a("2877")),d=Object(c["a"])(r,i,s,!1,null,"2ed8ef4a",null);e["default"]=d.exports},"455a":function(t,e,a){},"45ae":function(t,e,a){"use strict";a("455a")}}]);