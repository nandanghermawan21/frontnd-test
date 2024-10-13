import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';
import { UserDetailType } from '~/types/account';

// State type
interface State {
    count: number;
    userDetail: UserDetailType | null;
}

export const storeKey = {
    increment: 'increment',
    setUserDetail: 'setUserDetail',
}

// Create store
export const store = createStore<State>({
    state() {
        return {
            count: 0,
            userDetail: null
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        setUserDetail(state, userDetail: UserDetailType) {
            state.userDetail = userDetail;
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        },
        setUserDetail({ commit }, userDetail: UserDetailType) {
            commit('setUserDetail', userDetail);
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        },
        getUserDetail(state) {
            return state.userDetail;
        }
    }
});

// Define a key for the store
export const key: InjectionKey<Store<State>> = Symbol();
