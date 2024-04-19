import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.products.push(newProduct);
    },
    EDIT_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    }
  },
  actions: {
    addProduct({ commit }, newProduct) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('ADD_PRODUCT', newProduct);
          resolve();
        }, 1000);
      });
    },
    editProduct({ commit, state }, updatedProduct) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('EDIT_PRODUCT', updatedProduct);
          resolve();
        }, 1000);
      });
    },
    deleteProduct({ commit }, productId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('DELETE_PRODUCT', productId);
          resolve();
        }, 1000);
      });
    }
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    }
    // Other getters if needed
  }
});

export default store;
