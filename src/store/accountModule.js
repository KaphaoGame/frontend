
const state = {
    status: {
        loggedIn: true
    },
    user: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        displayName: null,
        userName: null,
        loginStatus: false,
    }
};

const actions = {
    login({ commit }, user) {
        commit("loginRequest", user);
        commit("setFirstName", user.firstName);
        commit("setLastName", user.lastName);
        commit("setEmail", user.email);
        commit("setPassword", user.password);
        commit("setDisplayName", user.displayName);
        commit("setUserName", user.userName);
        commit("setLoginStatus", user.loginStatus);
    },
    register({ commit }, user) {
        commit('registerRequest', user);
    },
    logout({ commit }) {
        commit("logout");
    }
};

const getters = {
    getUser(state) {
        return state.user;
    },
    getFirstName(state) {
        return state.user.firstName;
    },
    getLastName(state) {
        return state.user.lastName;
    },
    getEmail(state) {
        return state.user.email;
    },
    getPassword(state) {
        return state.user.password;
    },
    getDisplayName(state) {
        return state.user.displayName;
    },
    getUserName(state) {
        return state.user.userName;
    },
    getLoginStatus(state) {
        return state.user.loginStatus;
    }
}

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    setFirstName(state, firstName) {
        state.user.firstName = firstName;
    },
    setLastName(state, lastName) {
        state.user.lastName = lastName;
    },
    setEmail(state, email) {
        state.user.email = email;
    },
    setPassword(state, password) {
        state.user.password = password;
    },
    setDisplayName(state, displayName) {
        state.user.displayName = displayName;
    },
    setUserName(state, userName) {
        state.user.userName = userName;
    },
    setLoginStatus(state, loginStatus) {
        state.user.loginStatus = loginStatus;
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};