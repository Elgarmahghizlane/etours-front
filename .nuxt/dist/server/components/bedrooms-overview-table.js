exports.ids = [6];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("569384fc", content, true, context)
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overviewTable_vue_vue_type_style_index_0_id_f9d4c924_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overviewTable_vue_vue_type_style_index_0_id_f9d4c924_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overviewTable_vue_vue_type_style_index_0_id_f9d4c924_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overviewTable_vue_vue_type_style_index_0_id_f9d4c924_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overviewTable_vue_vue_type_style_index_0_id_f9d4c924_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-cell-width[data-v-f9d4c924]{width:9rem!important}.table-room[data-v-f9d4c924]{text-align:center;width:6rem!important}.data-table[data-v-f9d4c924]{height:12px!important;padding-bottom:0;padding-top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bedrooms/overviewTable.vue?vue&type=template&id=f9d4c924&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "overflow-x-auto w-full max-h-[calc(100vh-(150px))]"
  }, [_vm._ssrNode("<table class=\"w-full\" data-v-f9d4c924><thead class=\"sticky top-0\" data-v-f9d4c924><tr class=\"bg-white\" data-v-f9d4c924><th class=\"px-8 py-6 border-r border-gray-300 text-sm font-semibold\" data-v-f9d4c924><div class=\"table-room\" data-v-f9d4c924>\n            Room\n          </div></th> <th class=\"px-8 py-6 text-sm font-semibold relative\" data-v-f9d4c924><div class=\"table-type text-center\" data-v-f9d4c924>\n            Type\n          </div></th> " + _vm._ssrList(_vm.days, function (day) {
    return "<th class=\"border-l border-gray-300 px-2\" data-v-f9d4c924><div class=\"table-cell-width\" data-v-f9d4c924><div class=\"h-[70%] flex justify-center items-center\" data-v-f9d4c924><span class=\"text-center py-1 text-sm font-semibold\" data-v-f9d4c924>" + _vm._ssrEscape("\n                  " + _vm._s(day.substring(8, 10)) + " ") + "<br data-v-f9d4c924>" + _vm._ssrEscape("\n                  " + _vm._s(day.substring(0, 3)) + "\n                ") + "</span></div> <div class=\"flex justify-between gap-2 text-xs font-light text-gray-400\" data-v-f9d4c924><span data-v-f9d4c924>Status</span> <span data-v-f9d4c924>Available</span> <span data-v-f9d4c924>Total</span></div></div></th>";
  }) + "</tr></thead> <tbody class=\"overflow-y-auto h-[calc(100vh-(150px))]\" data-v-f9d4c924>" + _vm._ssrList(_vm.dataTable, function (e, index) {
    return "<tr" + _vm._ssrClass("font-semibold px-2", index % 2 === 0 ? 'bg-[#F4F4F4]' : 'bg-white') + " data-v-f9d4c924><td class=\"px-8 border-r border-gray-300 text-center text-sm font-semibold data-table\" data-v-f9d4c924>" + _vm._ssrEscape("\n          " + _vm._s(e.room) + "\n        ") + "</td> <td class=\"px-8 text-center whitespace-nowrap text-sm font-semibold data-table\" data-v-f9d4c924>" + _vm._ssrEscape("\n          " + _vm._s(e.type) + "\n        ") + "</td> " + _vm._ssrList(_vm.days, function (day) {
      return "<td class=\"border-l border-gray-300 px-2 font-semibold data-table\" data-v-f9d4c924><div class=\"flex justify-between items-center text-xs font-semibold\" data-v-f9d4c924>" + (e.Status === true ? "<span class=\"rounded-full bg-green-400 p-1 text-center text-green-400\" data-v-f9d4c924>.</span>" : "<!---->") + " " + (e.Status === false ? "<span class=\"rounded-full bg-red-400 p-1 text-center text-red-400\" data-v-f9d4c924>.</span>" : "<!---->") + " <span data-v-f9d4c924>" + _vm._ssrEscape(_vm._s(e.Available)) + "</span> <span data-v-f9d4c924>" + _vm._ssrEscape(_vm._s(e.total)) + "</span></div></td>";
    }) + "</tr>";
  }) + "</tbody> <tfoot class=\"overflow-y-auto sticky bottom-0 bg-[#F4F4F4] w-full\" data-v-f9d4c924><tr data-v-f9d4c924><td colspan=\"2\" class=\"text-center px-4 py-2 text-sm font-semibold\" data-v-f9d4c924>Total availability</td> " + _vm._ssrList(_vm.days, function (day) {
    return "<td class=\"border-l border-gray-300 px-2\" data-v-f9d4c924><div class=\"flex justify-between gap-2 text-xs\" data-v-f9d4c924><span data-v-f9d4c924></span> <span class=\"text-xs\" data-v-f9d4c924>5</span> <span data-v-f9d4c924>5</span></div></td>";
  }) + "</tr></tfoot></table>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Bedrooms/overviewTable.vue?vue&type=template&id=f9d4c924&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bedrooms/overviewTable.vue?vue&type=script&lang=js&
/* harmony default export */ var overviewTablevue_type_script_lang_js_ = ({
  props: {
    selectedDate: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      tableKeys: ['Room', 'type'],
      dataTable: [{
        room: "13",
        type: "Single",
        Status: true,
        Available: 1,
        total: 1
      }, {
        room: "25",
        type: "Double",
        Status: false,
        Available: 0,
        total: 0
      }, {
        room: "2",
        type: "Triple",
        Status: true,
        Available: 1,
        total: 1
      }, {
        room: "25",
        type: "Avec vue sur mer",
        Status: false,
        Available: 0,
        total: 0
      }, {
        room: "2",
        type: "Presedentiel",
        Status: true,
        Available: 0,
        total: 0
      }, {
        room: "13",
        type: "Suite",
        Status: true,
        Available: 1,
        total: 1
      }],
      left: __webpack_require__(96),
      right: __webpack_require__(97)
    };
  },
  computed: {
    days() {
      const days = [];
      const date = new Date(this.selectedDate);
      for (let i = 0; i < 20; i++) {
        days.push(date.toDateString());
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
  }
});
// CONCATENATED MODULE: ./components/Bedrooms/overviewTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var Bedrooms_overviewTablevue_type_script_lang_js_ = (overviewTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Bedrooms/overviewTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Bedrooms_overviewTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f9d4c924",
  "7dd3ba6f"
  
)

/* harmony default export */ var overviewTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTUuNzUgMTkuNUw4LjI1IDEybDcuNS03LjUiIC8+Cjwvc3ZnPgo="

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNiI+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOC4yNSA0LjVsNy41IDcuNS03LjUgNy41IiAvPgo8L3N2Zz4K"

/***/ })

};;
//# sourceMappingURL=bedrooms-overview-table.js.map