(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiIGNsYXNzPSJ3LTYgaC02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjI1IDQuNWw3LjUgNy41LTcuNSA3LjUiIC8+Cjwvc3ZnPgo="},424:function(t,e,o){var content=o(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("b6af7cea",content,!0,{sourceMap:!1})},460:function(t,e,o){"use strict";o(424)},461:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Jost&display=swap);"]),n.push([t.i,"",""]),n.locals={},t.exports=n},514:function(t,e,o){"use strict";o.r(e);o(16);var n={data:function(){return{name:"Booking CutOff",right:o(368),data:[{h1:"No Cutoff",span:"I take bookings right up untill the start time of the experience"},{h1:"With Cutoff",span:"I take bookings right up untill the start time of the experience"}],picked:"",times:["weeks","days","hours","minutes"],showDate:!1}},methods:{goBack:function(){this.$router.go(-1)},setOption:function(option){this.picked=option,this.showDate="With Cutoff"===option.h1}}},c=(o(460),o(6)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"px-4 mx-2 bg-[#235a61] rounded-xl z-10"},[e("h1",{staticClass:"font-bold text-[29px] mx-6 text-white text-center",staticStyle:{"font-family":"'Dancing Script', cursive"}},[t._v("\n      "+t._s(t.name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"flex flex-col gap-6 mx-2",staticStyle:{"margin-top":"2rem"}},[t._l(t.data,(function(o,n){return e("div",{key:n,staticClass:"bg-gradient-to-r from-[#F7FBF3] rounded-xl flex justify-between items-center h-[9rem] cursor-pointer",staticStyle:{"box-shadow":"2px 2px 3px 2px rgb(172, 172, 172)"},on:{click:function(e){return t.setOption(o)}}},[e("div",{staticClass:"flex flex-col justify-between gap-4"},[e("div",{staticClass:"w-[5rem] font-bold font-sans text-[21px] text-black pl-8 p-1 text-center",staticStyle:{"line-height":"1"}},[t._v("\n          "+t._s(o.h1)+"\n        ")]),t._v(" "),e("div",{staticClass:"font-light text-[#235a61] text-[16px] px-4 pb-1"},[t._v("\n          "+t._s(o.span))])]),t._v(" "),e("div",{staticClass:"custom-radio rounded-r-xl h-full flex items-center w-12",class:{"custom-radio":!0,"bg-[#235a61]":t.picked===o,"bg-white":t.picked!==o}},[t.picked===o?e("img",{staticClass:"w-12",attrs:{src:t.right}}):t._e()])])})),t._v(" "),t.showDate?e("div",{staticClass:"flex justify-between md:justify-start items-center gap-4 md:gap-6"},t._l(t.times,(function(o,i){return e("div",{key:i,staticClass:"rounded-xl bg-[#F7FBF3] p-4 font-light text-[#235a61] text-[16px]",staticStyle:{"box-shadow":"2px 2px 3px 2px rgb(172, 172, 172)"}},[t._v(" "+t._s(o))])})),0):t._e()],2),t._v(" "),e("div",{staticClass:"float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer",staticStyle:{"margin-bottom":"2rem"},on:{click:t.goBack}},[t._v("\n    Back\n  ")]),t._v(" "),e("div",{staticClass:"float-right bg-[#235a61] border border-[#235a61] rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer",staticStyle:{"margin-bottom":"2rem"}},[e("nuxt-link",{attrs:{to:"/experience/booking"}},[t._v(" Continue")])],1)])}),[],!1,null,"f45f5658",null);e.default=component.exports}}]);