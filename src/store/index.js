import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: []
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    }
    // Other getters if needed
  }
});

export default store;
