import {login} from "../../api/login";
import {getToken, setToken} from "../../router/auth";

const user = {
  state: {
    token: getToken(),
    name: ''
  },

  mutations: {
    SET_TOKEN: (state,token) =>{
      state.token = token;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          const tokenStr = data.tokenHead+data.token
          setToken(tokenStr)
          commit('SET_TOKEN', tokenStr)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
