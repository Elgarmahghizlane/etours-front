exports.ids = [21];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Maps.vue?vue&type=template&id=75db7f64&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('GmapMap', {
    staticClass: "w-full h-full",
    attrs: {
      "center": _vm.center,
      "zoom": 14,
      "map-type-id": "terrain"
    }
  }, _vm._l(_vm.markers, function (m, index) {
    return _c('GmapMarker', {
      key: index,
      attrs: {
        "position": m.position,
        "clickable": true,
        "draggable": true
      }
    });
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home/Maps.vue?vue&type=template&id=75db7f64&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/Maps.vue?vue&type=script&lang=js&
/* harmony default export */ var Mapsvue_type_script_lang_js_ = ({
  // name: 'GoogleMaps',
  data() {
    return {
      center: {
        lat: 30.40333411370686,
        lng: -9.528517173103008
      },
      markers: [{
        position: {
          lat: 30.40333411370686,
          lng: -9.528517173103008
        }
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Home/Maps.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_Mapsvue_type_script_lang_js_ = (Mapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/Maps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_Mapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2ffeaec5"
  
)

/* harmony default export */ var Maps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-maps.js.map