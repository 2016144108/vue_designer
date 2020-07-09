import { login, whoami, logout } from '../api/userApi'

export default {
    namespaced: true,//开启匿名空间
    state: {
        data: [],
        isLoading: false,
    },
    mutations: {
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        setData(state, payload){
            state.data = payload;
        }
    },
    actions: {
        async login(context, payload){
            context.commit('setIsLoading',true);
            const resp = await login(payload);
            console.log(payload);
            if(resp.code === 0){
                context.commit('setData', resp.data);
            }
            context.commit('setIsLoading',false);
        },
        async whoami(context){
            context.commit('setIsLoading',true);
            const resp = await whoami();
            console.log(resp);
            context.commit('setData', resp);
            context.commit('setIsLoading',false);
        },
        logout(context){
            context.commit('setIsLoading',true);
            logout();
            context.commit('setData', null);
            context.commit('setIsLoading',false);
        }
    }
}
