import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { db, storage } from '@/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    documents: [],
    document: {
      name: null,
      url: null,
      fields: {}
    },
    error: null,
    status: null,
    links: ['Document Generator', 'Matter Tracker']
  },
  getters: {
    documents(state) {
      return state.documents
    },
    documentFields(state) {
      return state.document.fields
    },
    documentType(state) {
      return state.document.name
    },
    documentURL(state) {
      return state.document.url
    }
  },
  mutations: {
    setDocuments(state, payload) {
      state.documents = payload
    },
    setDocument(state, payload) {
      state.document = { ...state.document, ...payload }
    },
    setDocumentType(state, payload) {
      state.document.name = payload
    },
    setDocumentFields(state, payload) {
      state.document.fields = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setStatus(state, payload) {
      state.status = payload
    }
  },
  actions: {
    searchAction({ commit }) {
      commit('setStatus', 'loading')
      db.collection('documentTypes')
        .get()
        .then((q: firebase.firestore.QuerySnapshot) => {
          commit(
            'setDocuments',
            q.docs.map(doc => doc.data())
          )
        })
        .finally(commit('setStatus', 'success'))
    },
    setDocuments({ commit }, payload) {
      commit('setDocuments', payload)
    },
    setDocument({ commit }, payload) {
      commit('setDocument', payload)
    },
    setDocumentFields({ commit }, payload) {
      commit('setDocumentFields', payload)
    }
  },
  modules: {}
})