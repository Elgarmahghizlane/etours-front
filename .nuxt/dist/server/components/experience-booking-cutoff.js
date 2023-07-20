exports.ids = [9];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b6af7cea", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCutoff_vue_vue_type_style_index_0_id_f45f5658_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCutoff_vue_vue_type_style_index_0_id_f45f5658_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCutoff_vue_vue_type_style_index_0_id_f45f5658_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCutoff_vue_vue_type_style_index_0_id_f45f5658_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCutoff_vue_vue_type_style_index_0_id_f45f5658_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Jost&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/BookingCutoff.vue?vue&type=template&id=f45f5658&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"px-4 mx-2 bg-[#235a61] rounded-xl z-10\" data-v-f45f5658><h1 class=\"font-bold text-[29px] mx-6 text-white text-center\" style=\"font-family: 'Dancing Script', cursive;\" data-v-f45f5658>" + _vm._ssrEscape("\n      " + _vm._s(_vm.name) + "\n    ") + "</h1></div> <div class=\"flex flex-col gap-6 mx-2\" style=\"margin-top:2rem ;\" data-v-f45f5658>" + _vm._ssrList(_vm.data, function (d, index) {
    return "<div class=\"bg-gradient-to-r from-[#F7FBF3] rounded-xl flex justify-between items-center h-[9rem] cursor-pointer\" style=\"box-shadow: 2px 2px 3px 2px rgb(172, 172, 172); \" data-v-f45f5658><div class=\"flex flex-col justify-between gap-4\" data-v-f45f5658><div class=\"w-[5rem] font-bold font-sans text-[21px] text-black pl-8 p-1 text-center\" style=\" line-height: 1;\" data-v-f45f5658>" + _vm._ssrEscape("\n          " + _vm._s(d.h1) + "\n        ") + "</div> <div class=\"font-light text-[#235a61] text-[16px] px-4 pb-1\" data-v-f45f5658>" + _vm._ssrEscape("\n          " + _vm._s(d.span)) + "</div></div> <div" + _vm._ssrClass("custom-radio rounded-r-xl h-full flex items-center w-12", {
      'custom-radio': true,
      'bg-[#235a61]': _vm.picked === d,
      'bg-white': _vm.picked !== d
    }) + " data-v-f45f5658>" + (_vm.picked === d ? "<img" + _vm._ssrAttr("src", _vm.right) + " class=\"w-12\" data-v-f45f5658>" : "<!---->") + "</div></div>";
  }) + " " + (_vm.showDate ? "<div class=\"flex justify-between md:justify-start items-center gap-4 md:gap-6\" data-v-f45f5658>" + _vm._ssrList(_vm.times, function (t, i) {
    return "<div class=\"rounded-xl bg-[#F7FBF3] p-4 font-light text-[#235a61] text-[16px]\" style=\"box-shadow: 2px 2px 3px 2px rgb(172, 172, 172);\" data-v-f45f5658>" + _vm._ssrEscape(" " + _vm._s(t)) + "</div>";
  }) + "</div>" : "<!---->") + "</div> <div class=\"float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer\" style=\"margin-bottom: 2rem;\" data-v-f45f5658>\n    Back\n  </div> "), _vm._ssrNode("<div class=\"float-right bg-[#235a61] border border-[#235a61] rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer\" style=\"margin-bottom: 2rem;\" data-v-f45f5658>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/experience/booking"
    }
  }, [_vm._v(" Continue")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Experience/BookingCutoff.vue?vue&type=template&id=f45f5658&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/BookingCutoff.vue?vue&type=script&lang=js&
/* harmony default export */ var BookingCutoffvue_type_script_lang_js_ = ({
  data() {
    return {
      name: 'Booking CutOff',
      right: __webpack_require__(98),
      data: [{
        h1: 'No Cutoff',
        span: 'I take bookings right up untill the start time of the experience'
      }, {
        h1: 'With Cutoff',
        span: 'I take bookings right up untill the start time of the experience'
      }],
      picked: '',
      times: ['weeks', 'days', 'hours', 'minutes'],
      showDate: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },

    setOption(option) {
      this.picked = option;
      this.showDate = option.h1 === 'With Cutoff';
    }
  }
});
// CONCATENATED MODULE: ./components/Experience/BookingCutoff.vue?vue&type=script&lang=js&
 /* harmony default export */ var Experience_BookingCutoffvue_type_script_lang_js_ = (BookingCutoffvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Experience/BookingCutoff.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Experience_BookingCutoffvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f45f5658",
  "18489f73"
  
)

/* harmony default export */ var BookingCutoff = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiIGNsYXNzPSJ3LTYgaC02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjI1IDQuNWw3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=experience-booking-cutoff.js.map