import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [
      {
        id: 1,
        title: "Harry Potter",
        author: 'J K Rowling',
        audience: '9 - 12 years',
        published: '1997',
        pages: '245',
        publisher: 'Rabén & Sjögren',
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 2,
        title: "Bamse",
        author: 'Bamse Entertainment',
        audience: '3 - 6 years',
        published: '2002',
        pages: '50',
        publisher: 'Rabén & Sjögren',
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 3,
        title: "Madeline",
        author: 'Ludwig Bemelmans',
        audience: '5 - 10 years',
        published: '2005',
        pages: '200',
        publisher: 'Ludde Inc',
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 4,
        title: "Where the wild things are",
        author: 'Maurice Sendak',
        audience: '9 - 12 years',
        published: '2018',
        pages: '500',
        publisher: 'Something',
        description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      },
      {
        id: 5,
        title: "Goodnight Moon",
        author: 'Marget Wise Brown',
        audience: '1 - 13 years',
        published: '1995',
        pages: '20',
        publisher: 'Moon',
        description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      },
      {
        id: 6,
        title: "A Wrinkle in time",
        author: 'Roger pontare',
        audience: '15 - 18 years',
        published: '2020',
        pages: '664',
        publisher: 'Pontare',
        description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      },
      {
        id: 7,
        title: "Babblarna",
        author: 'Monika Gren',
        audience: '2 - 5 years',
        published: '1980',
        pages: '15',
        publisher: 'Monikas',
        description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      },
      {
        id: 8,
        title: "Pettson och findus",
        author: 'Göran persson',
        audience: '2 - 5 years',
        published: '1998',
        pages: '45',
        publisher: 'findus',
        description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      },
    ]
  },
  getters: {
    books: state => {
      return state.books;
    },
    getBookById: (state, getters) => (id) => {
      return getters.books.find(book => book.id == id);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
