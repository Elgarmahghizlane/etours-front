exports.ids = [13];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("62672faa", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_025e0b86_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_025e0b86_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_025e0b86_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_025e0b86_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_025e0b86_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
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

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/Title.vue?vue&type=template&id=025e0b86&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"relative rounded-xl pb-2\" data-v-025e0b86><div class=\"absolute inset-0 bg-[url('static/img/ship.png')] bg-cover rounded-xl bg-opacity-25\" data-v-025e0b86></div> <h1 class=\"bg-opacity-80 font-bold text-[30px] text-white bg-[#235a61] rounded-xl px-4 py-2 text-center relative z-5\" style=\"font-family: 'Dancing Script', cursive;\" data-v-025e0b86>" + _vm._ssrEscape("\n      " + _vm._s(_vm.name) + "\n    ") + "</h1> <div class=\"px-4 py-2 m-4 bg-white rounded-xl relative z-5\" data-v-025e0b86><textarea rows=\"4\" placeholder=\"Example: The ultimate tour...\" required=\"required\" class=\"block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 outline-none\" data-v-025e0b86>" + _vm._ssrEscape(_vm._s(_vm.experience)) + "</textarea></div></div> " + (_vm.showErrorMessage ? "<span class=\"text-red-500 font-bold text-xs m-1\" data-v-025e0b86>\n    ! You can't leave this field blank\n  </span>" : "<!---->") + " "), _c('nuxt-link', {
    attrs: {
      "to": "/experience/plan"
    }
  }, [_c('div', {
    staticClass: "float-right bg-[#235a61] border border-[#235a61]rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer",
    staticStyle: {
      "margin-bottom": "2rem"
    }
  }, [_vm._v("\n      Continue\n    ")])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Experience/Title.vue?vue&type=template&id=025e0b86&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/Title.vue?vue&type=script&lang=js&
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  data() {
    return {
      name: 'Name your experience',
      experience: '',
      showErrorMessage: false
    };
  },
  methods: {
    handleContinueClicked() {
      if (this.experience !== '') {
        // Emit the continueClicked event
        this.$emit('continueClicked');
      } else {
        // Show an error message or perform any other action
        this.showErrorMessage = true;
        // console.log("You must fill in the experience field.");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Experience/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Experience_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Experience/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Experience_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "025e0b86",
  "1159a425"
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=experience-title.js.map