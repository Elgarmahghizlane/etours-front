exports.ids = [14];
exports.modules = {

/***/ 103:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiIGNsYXNzPSJ3LTYgaC02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNS43NSAxOS41TDguMjUgMTJsNy41LTcuNSIgLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/TravellersBook.vue?vue&type=template&id=cb215926&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"px-4 mx-2 bg-[#235a61] rounded-xl z-10\" data-v-cb215926><h1 class=\"font-bold text-[29px] mx-6 text-white text-center\" style=\"font-family: 'Dancing Script', cursive;\" data-v-cb215926>" + _vm._ssrEscape("\n      " + _vm._s(_vm.name) + "\n    ") + "</h1></div> <div class=\"flex flex-col gap-6 mx-2\" style=\"margin-top:2rem ;\" data-v-cb215926>" + _vm._ssrList(_vm.data, function (d, index) {
    return "<div class=\"bg-gradient-to-r from-[#F7FBF3] rounded-xl flex justify-between items-center h-[9rem] cursor-pointer\" style=\"box-shadow: 2px 2px 3px 2px rgb(172, 172, 172); \" data-v-cb215926><div class=\"flex flex-col justify-between gap-4\" data-v-cb215926><div class=\"font-light text-[#235a61] text-[16px] px-4 pb-1\" data-v-cb215926>" + _vm._ssrEscape("\n          " + _vm._s(d.span)) + "</div></div> <div" + _vm._ssrClass("custom-radio rounded-r-xl h-full flex items-center w-[3.5rem]", {
      'custom-radio': true,
      'bg-[#235a61]': _vm.picked === d,
      'bg-white': _vm.picked !== d
    }) + " data-v-cb215926>" + (_vm.picked === d ? "<img" + _vm._ssrAttr("src", _vm.right) + " class=\"w-12\" data-v-cb215926>" : "<!---->") + "</div></div>";
  }) + "</div> " + (_vm.showDate ? "<div class=\"flex justify-between items-center mt-6 mx-6\" data-v-cb215926>" + _vm._ssrList(_vm.times, function (t, i) {
    return "<div class=\"rounded-xl bg-[#F7FBF3] p-4 font-light text-[#235a61] text-[16px]\" style=\"box-shadow: 2px 2px 3px 2px rgb(172, 172, 172);\" data-v-cb215926>" + _vm._ssrEscape(" " + _vm._s(t)) + "</div>";
  }) + "</div>" : "<!---->") + " <div class=\"float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer\" style=\"margin-bottom: 2rem;\" data-v-cb215926>\n      Back\n    </div> "), _c('nuxt-link', {
    attrs: {
      "to": "/experience/capacitytype"
    }
  }, [_c('div', {
    staticClass: "float-right bg-[#235a61] border border-[#235a61] rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer",
    staticStyle: {
      "margin-bottom": "2rem"
    }
  }, [_vm._v("\n      Continue\n    ")])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Experience/TravellersBook.vue?vue&type=template&id=cb215926&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Experience/TravellersBook.vue?vue&type=script&lang=js&
/* harmony default export */ var TravellersBookvue_type_script_lang_js_ = ({
  data() {
    return {
      name: 'How close to the departure can travellers book?',
      toggleImage: __webpack_require__(98),
      right: __webpack_require__(98),
      data: [{
        span: 'Bookings is open until the start time of the experience'
      }, {
        span: 'Set custom cutto'
      }],
      picked: '',
      times: ['weeks', 'days', 'hours', 'minutes'],
      showDate: false
    };
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv;
      if (this.toggleImage === __webpack_require__(98)) {
        this.toggleImage = __webpack_require__(103);
      } else {
        this.toggleImage = __webpack_require__(98);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Experience/TravellersBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var Experience_TravellersBookvue_type_script_lang_js_ = (TravellersBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Experience/TravellersBook.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Experience_TravellersBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cb215926",
  "025c15c0"
  
)

/* harmony default export */ var TravellersBook = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiIGNsYXNzPSJ3LTYgaC02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjI1IDQuNWw3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=experience-travellers-book.js.map