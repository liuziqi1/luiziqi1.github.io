(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{448:function(e,t,n){"use strict";n.r(t);var s=n(65),l=Object(s.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"select"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[this._v("#")]),this._v(" select")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("insProductInfoCode: {  // 与接口字段定义一致\n    type: 'select', // checkbox-group-code/radio-group-code/select-code\n    selectInfo: [],  //下拉值\n    showCode: true,  //显示id+label\n    selectId: 'insInsuranceInfoCode',（接口返回的不是id,label形式，对应接口返回字段）\n    selectLabel: 'insInsuranceInfoName'（接口返回的不是id,label形式，对应接口返回字段）\n    filterable: true,  //是否可搜索，默认true\n    multiple: true,  //是否多选\n    multipleLimit: 5,  //多选时用户最多可以选择的项目数，为 0 则不限制\n    allowCreate: true  //是否允许用户创建新条目，需配合 filterable 使用\n    offset: 6,  //栅格左侧的间隔格数\n    span: 10,  //宽度\n    show: true,  //显示或隐藏，默认true\n    required: true,  //是否必填，false\n    clearable: true,  //清空按钮，默认true\n    disabled: true,  //是否禁用，默认false\n    placeholder: '',  //提示信息\n    readonly: true,  //只读，默认false\n    class: 'itemClass'  //类名\n    style: {width: 'calc(100% - 50px)'}  //行内样式\n    append: {  //输入框后面跟随按钮\n            label: '详情',\n            disabled: false,\n            type: 'button',\n            btnType: 'text',   //text或button\n            style: {\n              padding: '9px 10px'\n            },\n            // id: 'hckOrderInfoNo',\n            // url: '/order/PEorderDetails?id=',\n            // eventFn: this.hckDetails\n          },\n}         \nhckDetails(form, item) {\n    if (!form[item.id]) {\n        this.$error('订单号为空')\n        return\n    }\n        this.$router.push(`${item.url}${form[item.id]}`)\n},\n\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);