exports.ids = [24];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star-active.ce4e4e6.svg";

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star-noactive.a6f9d92.svg";

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Reviews.vue?vue&type=template&id=e34d6a0a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: ""
  }, [_vm._ssrNode("<div class=\"pt-[3rem] md:pt-[5rem] md:ml-24 flex flex-col\"><h1 class=\"font-bold text-base uppercase text-[#235a61] text-center md:text-left\">USER REVIEWS!</h1> <h1 class=\"font-bold font-sans lg:text-4xl md:text-3xl text-xl text-center md:text-left\">Discover the experiences of our <br>customers and their successes.</h1></div> <div class=\"relative overflow-hidden max-w-6xl md:mx-32 mx-4\"><div" + _vm._ssrClass("grid grid-cols-3 gap-2 w-[100%] overflow-hidden mt-12", _vm.showMore ? 'h-full mb-12' : 'h-64') + ">" + _vm._ssrList(_vm.reviews, function (review) {
    return "<div class=\"rounded-[33px] h-fit bg-[#F4F4F4] p-6 grid-cols-3\"><div class=\"flex flex-nowrap\"><div class=\"w-12 h-12\"><img" + _vm._ssrAttr("src", _vm.profileImg) + " alt class=\"w-full\"></div> <div class=\"lg:mx-4 md:mx-2 sm:mx-2\"><h4 class=\"font-bold lg:text-sm md:text-sm sm:text-xs\">" + _vm._ssrEscape(_vm._s(review.name)) + "</h4> <span class=\"inline-flex\">" + _vm._ssrList(4, function (index) {
      return "<img" + _vm._ssrAttr("src", _vm.starActive) + " alt class=\"w-4\">";
    }) + " <img" + _vm._ssrAttr("src", _vm.starNoactive) + " alt class=\"w-4\"></span></div></div> <p class=\"font-sans font-medium lg:text-sm md:text-sm sm:text-xs m-2\">" + _vm._ssrEscape(_vm._s(review.comment) + " ") + "</p></div>";
  }) + "</div> <div class=\"absolute text-center bottom-0 p-6 mx-auto left-0 bg-gradient-to-r from-white/50 to-white/70 w-full\"><button class=\"bg-[#235a61] w-[12rem] rounded-full text-white text-center mx-auto h-8\">\n        See more\n    </button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home/Reviews.vue?vue&type=template&id=e34d6a0a&

// EXTERNAL MODULE: ./static/img/profile.png
var profile = __webpack_require__(16);
var profile_default = /*#__PURE__*/__webpack_require__.n(profile);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Reviews.vue?vue&type=script&lang=js&

/* harmony default export */ var Reviewsvue_type_script_lang_js_ = ({
  name: 'VisitorReviews',
  data() {
    return {
      showMore: false,
      reviews: [{
        id: 1,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit!'
      }, {
        id: 2,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam culpa eaque ratione consequuntur!'
      }, {
        id: 3,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
      }, {
        id: 4,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit!Consectetur quam culpa eaque ratione consequuntur'
      }, {
        id: 5,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
      }, {
        id: 6,
        name: 'Bitterroot River Ranch',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. !'
      }],
      profileImg: profile_default.a,
      starActive: __webpack_require__(139),
      starNoactive: __webpack_require__(140)
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
});
// CONCATENATED MODULE: ./components/Home/Reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_Reviewsvue_type_script_lang_js_ = (Reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/Reviews.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_Reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8bcf2f46"
  
)

/* harmony default export */ var Reviews = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-reviews.js.map