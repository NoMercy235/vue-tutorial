import * as TYPES from './mutation-types';

export const mutations = {
    [TYPES.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },
    [TYPES.ADD_JOKE] (state, payload) {
        state.jokes.push(payload);
    },
    [TYPES.REMOVE_JOKE] (state, id) {
        const index = state.jokes.findIndex((joke) => joke.id === id);
        state.jokes.splice(index, 1);
    },

    [TYPES.SIGN_IN] (state, payload) {
        state.user = payload;
    },
    [TYPES.SIGN_OUT] (state) {
        state.user = {};
    },
};
