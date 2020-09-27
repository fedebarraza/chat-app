import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        messages: [],
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        }
    },
    actions: {
        async getMessages({ commit }) {
            let messages = (await axios.get("http://localhost:3000/messages")).data;
            commit('updateMessages', messages);
        },
        async newMessage({ commit }, message) {
            axios.post("http://localhost:3000/messages", {
                message: message,
            }).then((response) => {
                commit('newMessage', response.data.message);
            });
        }
    }
});

export default store;
