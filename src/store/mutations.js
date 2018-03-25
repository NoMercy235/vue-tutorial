import * as TYPES from './mutation-types';

export const mutations = {
    [TYPES.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },
};
