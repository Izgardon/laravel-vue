import { createStore } from "vuex";

import showAll from "./modules/showAll";

export default createStore({
  modules: {
    showAll,
  },
});
