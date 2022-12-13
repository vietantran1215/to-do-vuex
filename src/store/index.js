import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        name: "to do 1",
        status: "todo",
      },
      {
        id: 2,
        name: "to do 2",
        status: "todo",
      },
      {
        id: 3,
        name: "to do 3",
        status: "todo",
      },
    ],
  },
  getters: {
    getToDos(state) {
      return state.todos;
    },
  },
  mutations: {
    setToDos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    updateToDo(store, todoBody) {
      // Lấy ra todos (array)
      let todos = [...store.state.todos];

      // Tìm index của todo dựa trên id - findIndex()
      const index = todos.findIndex((t) => t.id === todoBody.id);

      // update todo
      todos = [
        ...todos.slice(0, index), // index = 4 ==> 0 1 2 3
        todoBody, // index 4
        ...todos.slice(index + 1), // 5 6 7 8 ...
      ];

      store.state.todos = todos;
    },
  },
  modules: {},
});
