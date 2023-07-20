exports.ids = [20];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plus.e42b6ca.png";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/time.f76a5e7.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/share.f9175c5.png";

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Etours.vue?vue&type=template&id=00a33520&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "md:pb-[14rem] pb-[3.5rem] bg-white"
  }, [_vm._ssrNode("<div class=\"lg:pl-28 md:pl-24 text-center md:text-left\"><span class=\"font-bold text-base text-[#235a61]\">WHY US!</span> <h1 class=\"font-bold font-sans lg:text-4xl md:text-3xl text-xl\">Why choose e-Tours ?</h1></div> <div class=\"flex justify-around flex-col md:flex-row mt-4 md:mt-12 mx-4 md:mx-[7rem] gap-10 md:gap-8\">" + _vm._ssrList(_vm.advantages, function (advantage, index) {
    return "<div class=\"text-center\"><img" + _vm._ssrAttr("src", advantage.icons) + " alt class=\"mx-auto w-28 md:w-32\"> <h1 class=\"font-bold mt-1 mb-4 text-xl font-sans\">" + _vm._ssrEscape(_vm._s(advantage.title)) + "</h1> <p class=\"text-lg\">" + _vm._ssrEscape("\n        " + _vm._s(advantage.paragraph) + "\n      ") + "</p></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home/Etours.vue?vue&type=template&id=00a33520&

// EXTERNAL MODULE: ./static/img/plus.png
var plus = __webpack_require__(119);
var plus_default = /*#__PURE__*/__webpack_require__.n(plus);

// EXTERNAL MODULE: ./static/img/time.png
var time = __webpack_require__(120);
var time_default = /*#__PURE__*/__webpack_require__.n(time);

// EXTERNAL MODULE: ./static/img/share.png
var share = __webpack_require__(121);
var share_default = /*#__PURE__*/__webpack_require__.n(share);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Etours.vue?vue&type=script&lang=js&



/* harmony default export */ var Etoursvue_type_script_lang_js_ = ({
  name: 'EtoursBanner',
  data() {
    return {
      advantages: [{
        icons: plus_default.a,
        title: 'Get more bookings',
        paragraph: 'Sell on as many channels as you want, reaching customers from all  around the world to book their tours and activities with you.'
      }, {
        icons: time_default.a,
        title: 'Save time',
        paragraph: 'Increase your efficiency and manage your business operations all in one place so you can save time and delight your customers.'
      }, {
        icons: share_default.a,
        title: 'Grow your business',
        paragraph: 'Explore opportunities for you to grow your distribution, increase your productivity, and build new revenue streams for your business.'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Home/Etours.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_Etoursvue_type_script_lang_js_ = (Etoursvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/Etours.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_Etoursvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00fd49f8"
  
)

/* harmony default export */ var Etours = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-etours.js.map