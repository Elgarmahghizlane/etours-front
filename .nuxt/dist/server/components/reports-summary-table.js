exports.ids = [26];
exports.modules = {

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Reports/SummaryTable.vue?vue&type=template&id=5b5b3c8a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "overflow-x-auto w-full max-h-[calc(100vh-(150px))] md:p-2"
  }, [_vm._ssrNode("<table class=\"w-full\" data-v-5b5b3c8a><thead class=\"sticky top-0 bg-[#E8E8E8]\" data-v-5b5b3c8a><tr data-v-5b5b3c8a><th class=\"px-2 border-r border-gray-500 text-sm font-light whitespace-nowrap text-center text-gray-600\" data-v-5b5b3c8a>\n          Selling Date\n        </th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600 whitespace-nowrap\" data-v-5b5b3c8a>\n          Bookings (Occupancy Rate)\n        </th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600\" data-v-5b5b3c8a>\n          RevPAR\n        </th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600\" data-v-5b5b3c8a>\n          ADR\n        </th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600 whitespace-nowrap\" data-v-5b5b3c8a>\n          Room Charges Before Taxes\n        </th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600 whitespace-nowrap\" data-v-5b5b3c8a>\n          All Charges <br data-v-5b5b3c8a> <span class=\"text-[12px] font-light\" data-v-5b5b3c8a>\n            (including taxes)\n          </span></th> <th class=\"px-2 text-sm font-light text-center border-gray-500 border-r text-gray-600 whitespace-nowrap\" data-v-5b5b3c8a>\n          All Payments\n        </th> <th class=\"px-2 text-sm font-light text-center text-gray-600\" data-v-5b5b3c8a>\n          Balance\n        </th></tr></thead> <tbody class=\"overflow-y-auto h-[calc(100vh-(160px))] bg-[#F4F4F4F4] rounded-xl\" data-v-5b5b3c8a>" + _vm._ssrList(_vm.dataTable, function (d, index) {
    return "<tr class=\"px-2\" data-v-5b5b3c8a><td class=\"border-gray-300 font-light text-center whitespace-nowrap text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.sellingDate) + "\n        ") + "</td> <td class=\"font-light text-center whitespace-nowrap text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.bookings) + "\n        ") + "</td> <td class=\"font-light text-center whitespace-nowrap text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.revPAR) + "\n        ") + "</td> <td class=\"border-gray-300 font-light text-center text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.ADR) + "\n        ") + "</td> <td class=\"border-gray-300 font-light text-center text-sm whitespace-nowrap\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.beforeTaxes) + "\n        ") + "</td> <td class=\"border-gray-300 font-light text-center text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.allCharges) + "\n        ") + "</td> <td class=\"border-gray-300 font-light text-center text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.allPayments) + "\n        ") + "</td> <td class=\"border-gray-300 font-light text-center text-sm\" data-v-5b5b3c8a>" + _vm._ssrEscape("\n          " + _vm._s(d.balance) + "\n        ") + "</td></tr>";
  }) + "</tbody> <tfoot class=\"overflow-y-auto sticky bottom-0 bg-[#F4F4F4] w-full\" data-v-5b5b3c8a><tr class=\"bg-[#E8E8E8]\" data-v-5b5b3c8a>" + _vm._ssrList(_vm.total, function (d, index) {
    return "<td class=\"px-2 py-1\" data-v-5b5b3c8a><div" + _vm._ssrClass("text-sm text-center", {
      'font-bold': d === 'Total'
    }) + " data-v-5b5b3c8a><span data-v-5b5b3c8a>" + _vm._ssrEscape(_vm._s(d)) + "</span></div></td>";
  }) + "</tr></tfoot></table>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Reports/SummaryTable.vue?vue&type=template&id=5b5b3c8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Reports/SummaryTable.vue?vue&type=script&lang=js&
/* harmony default export */ var SummaryTablevue_type_script_lang_js_ = ({
  data() {
    return {
      dataTable: [{
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }, {
        sellingDate: '2023-04-02 Sunday',
        bookings: '2 (22.2%)',
        revPAR: 0.00,
        ADR: 0.00,
        beforeTaxes: 0.00,
        allCharges: 0.00,
        allPayments: 0.00,
        balance: 0.00
      }],
      total: ['Total', '0', '1', '2', '3', '4', '5', '6']
    };
  }
});
// CONCATENATED MODULE: ./components/Reports/SummaryTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var Reports_SummaryTablevue_type_script_lang_js_ = (SummaryTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Reports/SummaryTable.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Reports_SummaryTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b5b3c8a",
  "1f851278"
  
)

/* harmony default export */ var SummaryTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reports-summary-table.js.map