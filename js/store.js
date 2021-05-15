

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: '',
        description: ''
      },
      {
        id: '2',
        title: '',
        description: ''
      },
      {
        id: '3',
        title: '',
        description: ''
      },
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})

