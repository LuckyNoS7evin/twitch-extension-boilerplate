import Vue from 'vue';
import Vuex from 'vuex';
import { ExtensionPlugin } from 'twitchext-vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

});

Vue.use(ExtensionPlugin, { store });

export default store;
