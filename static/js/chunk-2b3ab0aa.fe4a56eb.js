(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b3ab0aa"],{1139:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.selectModel?[i("el-tree",{ref:"tree",attrs:{data:e.treeList,"show-checkbox":"","node-key":"id","default-checked-keys":e.selectModelKeysNew,props:e.treeProps},on:{check:e.getCurrentNode}})]:[i("div",{staticClass:"divBox"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"container"},[i("el-form",{attrs:{inline:"",size:"small"}},[i("el-form-item",{attrs:{label:"状态："}},[i("el-select",{staticClass:"selWidth",attrs:{placeholder:"状态"},on:{change:e.handlerGetList},model:{value:e.listPram.status,callback:function(t){e.$set(e.listPram,"status",t)},expression:"listPram.status"}},[i("el-option",{attrs:{label:"全部",value:-1}}),e._v(" "),i("el-option",{attrs:{label:"显示",value:1}}),e._v(" "),i("el-option",{attrs:{label:"不显示",value:0}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"名称："}},[i("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入名称",size:"small",clearable:""},model:{value:e.listPram.name,callback:function(t){e.$set(e.listPram,"name",t)},expression:"listPram.name"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:e.handlerGetList},slot:"append"})],1)],1)],1)],1),e._v(" "),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:category:save"],expression:"['admin:category:save']"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleAddMenu({id:0,name:"顶层目录"})}}},[e._v("新增"+e._s(e.biztype.name))])],1),e._v(" "),i("el-table",{ref:"treeList",staticClass:"table",attrs:{data:e.treeList,size:"mini","highlight-current-row":"","row-key":"id","tree-props":{children:"child",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.name)+" | "+e._s(t.row.id)+"\n            ")]}}])}),e._v(" "),e.selectModel?e._e():[i("el-table-column",{attrs:{label:"类型","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("filterEmpty")(e._f("filterCategroyType")(t.row.type))))])]}}],null,!1,3038555523)}),e._v(" "),i("el-table-column",{attrs:{label:"分类图标","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[5===e.biztype.value?i("div",{staticClass:"listPic"},[i("i",{class:"el-icon-"+t.row.extra,staticStyle:{"font-size":"20px"}})]):i("div",{staticClass:"demo-image__preview"},[t.row.extra?i("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.extra,"preview-src-list":[t.row.extra]}}):i("img",{staticStyle:{width:"36px",height:"36px"},attrs:{src:e.defaultImg,alt:""}})],1)]}}],null,!1,2290255696)}),e._v(" "),5===e.biztype.value?i("el-table-column",{key:"2",attrs:{label:"Url","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.url))])]}}],null,!1,3700262509)}):e._e(),e._v(" "),i("el-table-column",{attrs:{label:"排序",prop:"sort","min-width":"150"}}),e._v(" "),i("el-table-column",{attrs:{label:"状态","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return e.checkPermi(["admin:category:update:status"])?[i("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(i){return e.onchangeIsShow(t.row)}},model:{value:t.row.status,callback:function(i){e.$set(t.row,"status",i)},expression:"scope.row.status"}})]:void 0}}],null,!0)}),e._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"200",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===e.biztype.value&&0===t.row.pid||5===e.biztype.value?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.handleAddMenu(t.row)}}},[e._v("添加子目录")]):e._e(),e._v(" "),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:category:info"],expression:"['admin:category:info']"}],attrs:{type:"text",size:"small"},on:{click:function(i){return e.handleEditMenu(t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:category:delete"],expression:"['admin:category:delete']"}],attrs:{type:"text",size:"small"},on:{click:function(i){return e.handleDelMenu(t.row)}}},[e._v("删除")])]}}],null,!1,1999917453)})]],2)],1)],1)],e._v(" "),i("el-dialog",{attrs:{title:0===e.editDialogConfig.isCreate?"创建"+e.biztype.name:"编辑"+e.biztype.name,visible:e.editDialogConfig.visible,"destroy-on-close":"","close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.editDialogConfig,"visible",t)}}},[e.editDialogConfig.visible?i("edit",{attrs:{prent:e.editDialogConfig.prent,"is-create":e.editDialogConfig.isCreate,"edit-data":e.editDialogConfig.data,biztype:e.editDialogConfig.biztype,"all-tree-list":e.treeList},on:{hideEditDialog:e.hideEditDialog}}):e._e()],1)],2)},l=[],n=i("651a"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-tree",{attrs:{data:e.ddd,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)},s=[],o={props:{id:{type:Number,required:!0}},data:function(){return{defaultProps:{children:"children",label:"label"},ddd:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],dataList:{page:0,limit:0,totalPage:0,total:0,list:[]}}},mounted:function(){this.handlerGetTreeList(this.id)},methods:{handlerGetTreeList:function(e){var t=this;e?n["g"]({pid:e}).then((function(e){t.dataList=e})):this.$message.error("当前数据id不正确")},handleNodeClick:function(e){console.log("data:",e)}}},d=o,c=i("2877"),u=Object(c["a"])(d,r,s,!1,null,"685d756a",null),h=u.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{ref:"editPram",attrs:{model:e.editPram,"label-width":"130px"}},[i("el-form-item",{attrs:{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称",trigger:["blur","change"]}]}},[i("el-input",{attrs:{maxlength:1===e.biztype.value?8:20,placeholder:"分类名称"},model:{value:e.editPram.name,callback:function(t){e.$set(e.editPram,"name",t)},expression:"editPram.name"}})],1),e._v(" "),1!==e.biztype.value&&3!==e.biztype.value?i("el-form-item",{attrs:{label:"URL"}},[i("el-input",{attrs:{placeholder:"URL"},model:{value:e.editPram.url,callback:function(t){e.$set(e.editPram,"url",t)},expression:"editPram.url"}})],1):e._e(),e._v(" "),3!==e.biztype.value?i("el-form-item",{attrs:{label:"父级"}},[i("el-cascader",{staticStyle:{width:"100%"},attrs:{disabled:1===e.isCreate&&0===e.editPram.pid,options:5===e.biztype.value?e.allTreeList:e.parentOptions,props:e.categoryProps},model:{value:e.editPram.pid,callback:function(t){e.$set(e.editPram,"pid",t)},expression:"editPram.pid"}})],1):e._e(),e._v(" "),5===e.biztype.value?i("el-form-item",{attrs:{label:"菜单图标"}},[i("el-input",{attrs:{placeholder:"请选择菜单图标"},model:{value:e.editPram.extra,callback:function(t){e.$set(e.editPram,"extra",t)},expression:"editPram.extra"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:e.addIcon},slot:"append"})],1)],1):e._e(),e._v(" "),1===e.biztype.value||3===e.biztype.value?i("el-form-item",{attrs:{label:"分类图标(180*180)"}},[i("div",{staticClass:"upLoadPicBox",on:{click:function(t){return e.modalPicTap("1")}}},[e.editPram.extra?i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:e.editPram.extra}})]):i("div",{staticClass:"upLoad"},[i("i",{staticClass:"el-icon-camera cameraIconfont"})])])]):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"排序"}},[i("el-input-number",{attrs:{min:0},model:{value:e.editPram.sort,callback:function(t){e.$set(e.editPram,"sort",t)},expression:"editPram.sort"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"状态"}},[i("el-switch",{attrs:{"active-text":"显示","inactive-text":"隐藏","active-value":!0,"inactive-value":!1},model:{value:e.editPram.status,callback:function(t){e.$set(e.editPram,"status",t)},expression:"editPram.status"}})],1),e._v(" "),1!==e.biztype.value&&3!==e.biztype.value&&5!==e.biztype.value?i("el-form-item",{attrs:{label:"扩展字段"}},[i("el-input",{attrs:{type:"textarea",placeholder:"扩展字段"},model:{value:e.editPram.extra,callback:function(t){e.$set(e.editPram,"extra",t)},expression:"editPram.extra"}})],1):e._e(),e._v(" "),i("el-form-item",[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:category:update"],expression:"['admin:category:update']"}],attrs:{type:"primary",loading:e.loadingBtn},on:{click:function(t){return e.handlerSubmit("editPram")}}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:e.close}},[e._v("取消")])],1)],1)],1)},p=[],f=i("fca7");function v(e){return P(e)||y(e)||g(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){if(e){if("string"===typeof e)return _(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_(e,t):void 0}}function y(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function P(e){if(Array.isArray(e))return _(e)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var C={props:{prent:{type:Object,required:!0},isCreate:{type:Number,default:0},editData:{type:Object},biztype:{type:Object,required:!0},allTreeList:{type:Array}},data:function(){return{loadingBtn:!1,constants:this.$constants,editPram:{extra:null,name:null,pid:null,sort:0,status:!0,type:this.biztype.value,url:null,id:0},categoryProps:{value:"id",label:"name",children:"child",expandTrigger:"hover",checkStrictly:!0,emitPath:!1},parentOptions:[]}},mounted:function(){this.initEditData()},methods:{addIcon:function(){var e=this;e.$modalIcon((function(t){e.editPram.extra=t}))},modalPicTap:function(e,t,i){var a=this,l=[];this.$modalUpload((function(i){"1"!==e||t||(a.editPram.extra=i[0].sattDir),"2"!==e||t||i.map((function(e){l.push(e.attachment_src),a.formValidate.slider_image.push(e)}))}),e,"store")},close:function(){this.$emit("hideEditDialog")},initEditData:function(){this.parentOptions=v(this.allTreeList),this.addTreeListLabelForCasCard(this.parentOptions,"child");var e=this.editData,t=e.extra,i=e.name,a=e.pid,l=e.sort,n=e.status,r=e.type,s=e.id,o=e.url;1===this.isCreate?(this.editPram.extra=t,this.editPram.name=i,this.editPram.pid=a,this.editPram.sort=l,this.editPram.status=n,this.editPram.type=r,this.editPram.url=o,this.editPram.id=s):(this.editPram.pid=this.prent.id,this.editPram.type=this.biztype.value)},addTreeListLabelForCasCard:function(e,t){e.forEach((function(e,t){e.child&&e.child.length&&e.child.forEach((function(e){e.disabled=!0}))}))},handlerSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.handlerSaveOrUpdate(0===t.isCreate)}))},handlerSaveOrUpdate:function(e){var t=this;e?(this.loadingBtn=!0,n["a"](this.editPram).then((function(e){t.$emit("hideEditDialog"),t.$message.success("创建目录成功"),t.loadingBtn=!1})).catch((function(){t.loadingBtn=!1}))):(this.editPram.pid=Array.isArray(this.editPram.pid)?this.editPram.pid[0]:this.editPram.pid,this.loadingBtn=!0,n["h"](this.editPram).then((function(e){t.$emit("hideEditDialog"),t.$message.success("更新目录成功"),t.loadingBtn=!1})).catch((function(){t.loadingBtn=!1})))}}},x=C,w=Object(c["a"])(x,m,p,!1,null,"1c6ff7fd",null),k=w.exports,z=i("e350"),$={components:{info:h,edit:k},props:{biztype:{type:Object,default:{value:-1},validator:function(e){return e.value>0}},pid:{type:Number,default:0,validator:function(e){return e>=0}},selectModel:{type:Boolean,default:!1},selectModelKeys:{type:Array},rowSelect:{}},data:function(){return{selectModelKeysNew:this.selectModelKeys,loading:!1,constants:this.$constants,treeProps:{label:"name",children:"child"},multipleSelection:[],editDialogConfig:{visible:!1,isCreate:0,prent:{},data:{},biztype:this.biztype},dataList:[],treeList:[],listPram:{pid:this.pid,type:this.biztype.value,status:-1,name:"",page:this.$constants.page.page,limit:this.$constants.page.limit[0]},viewInfoConfig:{data:null,visible:!1},defaultImg:i("cf6b")}},mounted:function(){this.handlerGetTreeList()},methods:{checkPermi:z["a"],onchangeIsShow:function(e){var t=this;n["c"](e.id).then((function(){t.$message.success("修改成功"),t.handlerGetTreeList()})).catch((function(){e.status=!e.status}))},handleEditMenu:function(e){this.editDialogConfig.isCreate=1,this.editDialogConfig.data=e,this.editDialogConfig.prent=e,this.editDialogConfig.visible=!0},handleAddMenu:function(e){this.editDialogConfig.isCreate=0,this.editDialogConfig.prent=e,this.editDialogConfig.data={},this.editDialogConfig.biztype=this.biztype,this.editDialogConfig.visible=!0},getCurrentNode:function(e){var t=this.$refs.tree.getNode(e);this.childNodes(t),this.$emit("rulesSelect",this.$refs.tree.getCheckedKeys())},childNodes:function(e){for(var t=e.childNodes.length,i=0;i<t;i++)e.childNodes[i].checked=e.checked,this.childNodes(e.childNodes[i])},parentNodes:function(e){if(e.parent)for(var t in e)"parent"==t&&(e[t].checked=!0,this.parentNodes(e[t]))},handleDelMenu:function(e){var t=this;this.$confirm("确定删除当前数据?").then((function(){n["d"](e).then((function(e){t.handlerGetTreeList(),t.$message.success("删除成功")}))}))},handlerGetList:function(){this.handlerGetTreeList()},handlerGetTreeList:function(){var e=this,t={type:this.biztype.value,status:this.listPram.status,name:this.listPram.name};this.loading=!0,3!==this.biztype.value?n["g"](t).then((function(t){e.treeList=e.handleAddArrt(t),e.loading=!1})).catch((function(){e.loading=!1})):n["f"]({type:3,status:this.listPram.status,pid:this.listPram.pid,name:this.listPram.name}).then((function(t){e.treeList=t.list}))},handlerGetInfo:function(e){this.viewInfoConfig.data=e,this.viewInfoConfig.visible=!0},handleNodeClick:function(e){console.log("data:",e)},handleAddArrt:function(e){var t=f["addTreeListLabel"](e);return t},hideEditDialog:function(){var e=this;setTimeout((function(){e.editDialogConfig.prent={},e.editDialogConfig.type=0,e.editDialogConfig.visible=!1,e.handlerGetTreeList()}),200)},handleSelectionChange:function(e,t){t.checkedNodes;var i=t.checkedKeys;t.halfCheckedNodes,t.halfCheckedKeys;this.multipleSelection=i,this.$emit("rulesSelect",this.multipleSelection)}}},L=$,D=(i("bf97"),Object(c["a"])(L,a,l,!1,null,"49b80c8d",null));t["a"]=D.exports},"55fb":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-container"},[i("category-list",{attrs:{biztype:e.constants.categoryType[0]}})],1)},l=[],n=i("1139"),r={components:{categoryList:n["a"]},data:function(){return{constants:this.$constants}}},s=r,o=i("2877"),d=Object(o["a"])(s,a,l,!1,null,"3e6ead71",null);t["default"]=d.exports},bf97:function(e,t,i){"use strict";i("f377")},f377:function(e,t,i){}}]);