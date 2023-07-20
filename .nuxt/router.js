import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a3e8ac9 = () => interopDefault(import('..\\pages\\Accounting\\accounting.vue' /* webpackChunkName: "pages/Accounting/accounting" */))
const _54cfdb03 = () => interopDefault(import('..\\pages\\bedrooms\\roomStatus.vue' /* webpackChunkName: "pages/bedrooms/roomStatus" */))
const _830bb978 = () => interopDefault(import('..\\pages\\Experience\\Availability.vue' /* webpackChunkName: "pages/Experience/Availability" */))
const _04a56700 = () => interopDefault(import('..\\pages\\Experience\\Booking.vue' /* webpackChunkName: "pages/Experience/Booking" */))
const _4736b47d = () => interopDefault(import('..\\pages\\Experience\\CapacityType.vue' /* webpackChunkName: "pages/Experience/CapacityType" */))
const _383dc813 = () => interopDefault(import('..\\pages\\Experience\\Experience.vue' /* webpackChunkName: "pages/Experience/Experience" */))
const _0342f00c = () => interopDefault(import('..\\pages\\Experience\\Pass.vue' /* webpackChunkName: "pages/Experience/Pass" */))
const _25456312 = () => interopDefault(import('..\\pages\\Experience\\Plan.vue' /* webpackChunkName: "pages/Experience/Plan" */))
const _b3892e2a = () => interopDefault(import('..\\pages\\Experience\\Pricingcategory.vue' /* webpackChunkName: "pages/Experience/Pricingcategory" */))
const _df4d1574 = () => interopDefault(import('..\\pages\\Experience\\TravellersBook.vue' /* webpackChunkName: "pages/Experience/TravellersBook" */))
const _1c9da505 = () => interopDefault(import('..\\pages\\Properties\\properties.vue' /* webpackChunkName: "pages/Properties/properties" */))
const _1ab84862 = () => interopDefault(import('..\\pages\\Reports\\Advance.vue' /* webpackChunkName: "pages/Reports/Advance" */))
const _63e1ad9f = () => interopDefault(import('..\\pages\\Reports\\Charges.vue' /* webpackChunkName: "pages/Reports/Charges" */))
const _0931ae10 = () => interopDefault(import('..\\pages\\Reports\\DailyAcc.vue' /* webpackChunkName: "pages/Reports/DailyAcc" */))
const _5c6339f7 = () => interopDefault(import('..\\pages\\Reports\\Employe.vue' /* webpackChunkName: "pages/Reports/Employe" */))
const _2e2c3ce8 = () => interopDefault(import('..\\pages\\Reports\\Market.vue' /* webpackChunkName: "pages/Reports/Market" */))
const _7d5b2dfd = () => interopDefault(import('..\\pages\\Reports\\Payments.vue' /* webpackChunkName: "pages/Reports/Payments" */))
const _0cd66aa8 = () => interopDefault(import('..\\pages\\Reports\\Reservation.vue' /* webpackChunkName: "pages/Reports/Reservation" */))
const _64dc34ab = () => interopDefault(import('..\\pages\\Reports\\Room.vue' /* webpackChunkName: "pages/Reports/Room" */))
const _73f085ec = () => interopDefault(import('..\\pages\\Reports\\Sales.vue' /* webpackChunkName: "pages/Reports/Sales" */))
const _4255d4f4 = () => interopDefault(import('..\\pages\\Reports\\Summary.vue' /* webpackChunkName: "pages/Reports/Summary" */))
const _fa00880e = () => interopDefault(import('..\\pages\\Reports\\Taxes.vue' /* webpackChunkName: "pages/Reports/Taxes" */))
const _4baa1c24 = () => interopDefault(import('..\\pages\\Reservation\\reservations.vue' /* webpackChunkName: "pages/Reservation/reservations" */))
const _34a046fd = () => interopDefault(import('..\\pages\\bedrooms\\Inventory\\Channel.vue' /* webpackChunkName: "pages/bedrooms/Inventory/Channel" */))
const _dcfa7a70 = () => interopDefault(import('..\\pages\\bedrooms\\Inventory\\HoteLink.vue' /* webpackChunkName: "pages/bedrooms/Inventory/HoteLink" */))
const _1581263c = () => interopDefault(import('..\\pages\\bedrooms\\Inventory\\OnlineBookingEngine.vue' /* webpackChunkName: "pages/bedrooms/Inventory/OnlineBookingEngine" */))
const _0d0a06ef = () => interopDefault(import('..\\pages\\bedrooms\\Inventory\\Overview.vue' /* webpackChunkName: "pages/bedrooms/Inventory/Overview" */))
const _1469b3a3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Accounting/accounting",
    component: _5a3e8ac9,
    name: "Accounting-accounting"
  }, {
    path: "/bedrooms/roomStatus",
    component: _54cfdb03,
    name: "bedrooms-roomStatus"
  }, {
    path: "/Experience/Availability",
    component: _830bb978,
    name: "Experience-Availability"
  }, {
    path: "/Experience/Booking",
    component: _04a56700,
    name: "Experience-Booking"
  }, {
    path: "/Experience/CapacityType",
    component: _4736b47d,
    name: "Experience-CapacityType"
  }, {
    path: "/Experience/Experience",
    component: _383dc813,
    name: "Experience-Experience"
  }, {
    path: "/Experience/Pass",
    component: _0342f00c,
    name: "Experience-Pass"
  }, {
    path: "/Experience/Plan",
    component: _25456312,
    name: "Experience-Plan"
  }, {
    path: "/Experience/Pricingcategory",
    component: _b3892e2a,
    name: "Experience-Pricingcategory"
  }, {
    path: "/Experience/TravellersBook",
    component: _df4d1574,
    name: "Experience-TravellersBook"
  }, {
    path: "/Properties/properties",
    component: _1c9da505,
    name: "Properties-properties"
  }, {
    path: "/Reports/Advance",
    component: _1ab84862,
    name: "Reports-Advance"
  }, {
    path: "/Reports/Charges",
    component: _63e1ad9f,
    name: "Reports-Charges"
  }, {
    path: "/Reports/DailyAcc",
    component: _0931ae10,
    name: "Reports-DailyAcc"
  }, {
    path: "/Reports/Employe",
    component: _5c6339f7,
    name: "Reports-Employe"
  }, {
    path: "/Reports/Market",
    component: _2e2c3ce8,
    name: "Reports-Market"
  }, {
    path: "/Reports/Payments",
    component: _7d5b2dfd,
    name: "Reports-Payments"
  }, {
    path: "/Reports/Reservation",
    component: _0cd66aa8,
    name: "Reports-Reservation"
  }, {
    path: "/Reports/Room",
    component: _64dc34ab,
    name: "Reports-Room"
  }, {
    path: "/Reports/Sales",
    component: _73f085ec,
    name: "Reports-Sales"
  }, {
    path: "/Reports/Summary",
    component: _4255d4f4,
    name: "Reports-Summary"
  }, {
    path: "/Reports/Taxes",
    component: _fa00880e,
    name: "Reports-Taxes"
  }, {
    path: "/Reservation/reservations",
    component: _4baa1c24,
    name: "Reservation-reservations"
  }, {
    path: "/bedrooms/Inventory/Channel",
    component: _34a046fd,
    name: "bedrooms-Inventory-Channel"
  }, {
    path: "/bedrooms/Inventory/HoteLink",
    component: _dcfa7a70,
    name: "bedrooms-Inventory-HoteLink"
  }, {
    path: "/bedrooms/Inventory/OnlineBookingEngine",
    component: _1581263c,
    name: "bedrooms-Inventory-OnlineBookingEngine"
  }, {
    path: "/bedrooms/Inventory/Overview",
    component: _0d0a06ef,
    name: "bedrooms-Inventory-Overview"
  }, {
    path: "/",
    component: _1469b3a3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
