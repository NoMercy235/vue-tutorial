import * as TYPES from './mutation-types';

export const initJokes = ({ commit, }) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', { method: 'GET', })
        .then((response) => response.json())
        .then((json) => commit(TYPES.INIT_JOKES, json));
};

export const addJoke = ({ commit, }) => {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', { method: 'GET', })
        .then((response) => response.json())
        .then((json) => commit(TYPES.ADD_JOKE, json));
};

export const removeJoke = ({ commit, }, id) => {
    commit(TYPES.REMOVE_JOKE, id);
};

export const signIn = ({ commit, }, user) => {
    commit(TYPES.SIGN_IN, user);
};
