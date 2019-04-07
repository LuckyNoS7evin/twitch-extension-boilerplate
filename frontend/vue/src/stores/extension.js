import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    channelId: null,
  },
  mutations: {
    channelId (state, channelId) {
      state.channelId = channelId
    }
  },
  actions: {
    onError (context, error) {

    },
    onContext (context, newContext, changes) {

    },
    onAuthorized (context, auth) {
      context.commit('channelId', auth.channelId)
      context.commit('userId', window.Twitch.ext.viewer.id)
      context.commit('opaqueId', window.Twitch.ext.viewer.opaqueId)
      context.commit('role', window.Twitch.ext.viewer.role)
      context.commit('isLinked', window.Twitch.ext.viewer.isLinked)
      context.commit('token', window.Twitch.ext.viewer.sessionToken)
    }
  },
});
