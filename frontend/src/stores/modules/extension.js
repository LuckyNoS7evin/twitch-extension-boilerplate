export default {
  namespaced: true,
  state: {
    channelId: null,
    userId: null,
    opaqueId: null,
    role: null,
    isLinked: false,
    token: null
  },
  mutations: {
    channelId(state, channelId) {
      state.channelId = channelId;
    },
    userId(state, userId) {
      state.userId = userId;
    },
    opaqueId(state, opaqueId) {
      state.opaqueId = opaqueId;
    },
    role(state, role) {
      state.role = role;
    },
    isLinked(state, isLinked) {
      state.isLinked = isLinked;
    },
    token(state, token) {
      state.token = token;
    }
  },
  actions: {
    onError(context, error) {},
    onContext(context, newContext, changes) {},
    onAuthorized(context, auth) {
      context.commit("channelId", auth.channelId);
      context.commit("userId", window.Twitch.ext.viewer.id);
      context.commit("opaqueId", window.Twitch.ext.viewer.opaqueId);
      context.commit("role", window.Twitch.ext.viewer.role);
      context.commit("isLinked", window.Twitch.ext.viewer.isLinked);
      context.commit("token", window.Twitch.ext.viewer.sessionToken);
    }
  }
};
