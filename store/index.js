// store/index.js
export const state = () => ({
  showComponentPlanned: false,
});

export const mutations = {
  setShowComponentPlanned(state, value) {
    state.showComponentPlanned = value;
  },
};
