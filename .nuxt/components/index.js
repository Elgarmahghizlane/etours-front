export const ExperienceSideMenu = () => import('../..\\components\\ExperienceSideMenu.vue' /* webpackChunkName: "components/experience-side-menu" */).then(c => wrapFunctional(c.default || c))
export const HeaderTop = () => import('../..\\components\\Header-top.vue' /* webpackChunkName: "components/header-top" */).then(c => wrapFunctional(c.default || c))
export const Sidemenu = () => import('../..\\components\\Sidemenu.vue' /* webpackChunkName: "components/sidemenu" */).then(c => wrapFunctional(c.default || c))
export const AccountingPagination = () => import('../..\\components\\Accounting\\Pagination.vue' /* webpackChunkName: "components/accounting-pagination" */).then(c => wrapFunctional(c.default || c))
export const AccountingSearch = () => import('../..\\components\\Accounting\\Search.vue' /* webpackChunkName: "components/accounting-search" */).then(c => wrapFunctional(c.default || c))
export const BedroomsBookengineTable = () => import('../..\\components\\Bedrooms\\bookengineTable.vue' /* webpackChunkName: "components/bedrooms-bookengine-table" */).then(c => wrapFunctional(c.default || c))
export const BedroomsChannelTable = () => import('../..\\components\\Bedrooms\\channelTable.vue' /* webpackChunkName: "components/bedrooms-channel-table" */).then(c => wrapFunctional(c.default || c))
export const BedroomsNavigator = () => import('../..\\components\\Bedrooms\\Navigator.vue' /* webpackChunkName: "components/bedrooms-navigator" */).then(c => wrapFunctional(c.default || c))
export const BedroomsOverviewTable = () => import('../..\\components\\Bedrooms\\overviewTable.vue' /* webpackChunkName: "components/bedrooms-overview-table" */).then(c => wrapFunctional(c.default || c))
export const BedroomsStatusTable = () => import('../..\\components\\Bedrooms\\statusTable.vue' /* webpackChunkName: "components/bedrooms-status-table" */).then(c => wrapFunctional(c.default || c))
export const ExperienceAvailability = () => import('../..\\components\\Experience\\Availability.vue' /* webpackChunkName: "components/experience-availability" */).then(c => wrapFunctional(c.default || c))
export const ExperienceBookingCutoff = () => import('../..\\components\\Experience\\BookingCutoff.vue' /* webpackChunkName: "components/experience-booking-cutoff" */).then(c => wrapFunctional(c.default || c))
export const ExperienceCapacity = () => import('../..\\components\\Experience\\Capacity.vue' /* webpackChunkName: "components/experience-capacity" */).then(c => wrapFunctional(c.default || c))
export const ExperiencePass = () => import('../..\\components\\Experience\\Pass.vue' /* webpackChunkName: "components/experience-pass" */).then(c => wrapFunctional(c.default || c))
export const ExperiencePriceCategory = () => import('../..\\components\\Experience\\PriceCategory.vue' /* webpackChunkName: "components/experience-price-category" */).then(c => wrapFunctional(c.default || c))
export const ExperienceTitle = () => import('../..\\components\\Experience\\Title.vue' /* webpackChunkName: "components/experience-title" */).then(c => wrapFunctional(c.default || c))
export const ExperienceTravellersBook = () => import('../..\\components\\Experience\\TravellersBook.vue' /* webpackChunkName: "components/experience-travellers-book" */).then(c => wrapFunctional(c.default || c))
export const ExperienceType = () => import('../..\\components\\Experience\\Type.vue' /* webpackChunkName: "components/experience-type" */).then(c => wrapFunctional(c.default || c))
export const HomeBanner = () => import('../..\\components\\Home\\Banner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c))
export const HomeChannels = () => import('../..\\components\\Home\\Channels.vue' /* webpackChunkName: "components/home-channels" */).then(c => wrapFunctional(c.default || c))
export const HomeContact = () => import('../..\\components\\Home\\Contact.vue' /* webpackChunkName: "components/home-contact" */).then(c => wrapFunctional(c.default || c))
export const HomeCopyright = () => import('../..\\components\\Home\\Copyright.vue' /* webpackChunkName: "components/home-copyright" */).then(c => wrapFunctional(c.default || c))
export const HomeEtours = () => import('../..\\components\\Home\\Etours.vue' /* webpackChunkName: "components/home-etours" */).then(c => wrapFunctional(c.default || c))
export const HomeMaps = () => import('../..\\components\\Home\\Maps.vue' /* webpackChunkName: "components/home-maps" */).then(c => wrapFunctional(c.default || c))
export const HomeNavbar = () => import('../..\\components\\Home\\Navbar.vue' /* webpackChunkName: "components/home-navbar" */).then(c => wrapFunctional(c.default || c))
export const HomeNewsletter = () => import('../..\\components\\Home\\Newsletter.vue' /* webpackChunkName: "components/home-newsletter" */).then(c => wrapFunctional(c.default || c))
export const HomeReviews = () => import('../..\\components\\Home\\Reviews.vue' /* webpackChunkName: "components/home-reviews" */).then(c => wrapFunctional(c.default || c))
export const PropertiesProperty = () => import('../..\\components\\Properties\\Property.vue' /* webpackChunkName: "components/properties-property" */).then(c => wrapFunctional(c.default || c))
export const ReservationsVueCalendar = () => import('../..\\components\\Reservations\\VueCalendar.vue' /* webpackChunkName: "components/reservations-vue-calendar" */).then(c => wrapFunctional(c.default || c))
export const ReportsSummaryTable = () => import('../..\\components\\Reports\\SummaryTable.vue' /* webpackChunkName: "components/reports-summary-table" */).then(c => wrapFunctional(c.default || c))
export const ReportsSummaryTop = () => import('../..\\components\\Reports\\SummaryTop.vue' /* webpackChunkName: "components/reports-summary-top" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
