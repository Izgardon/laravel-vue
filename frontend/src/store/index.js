import { createStore } from "vuex";

import showAll from "./modules/showAll";
import auth from "./modules/auth";

export default createStore({
  modules: {
    showAll,
    auth
  },
});
