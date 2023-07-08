import { createStore } from "vuex";

import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from "../utils/_localStorage";

const store = createStore({
  state: {
    notes: [],
  },
  mutations: {
    setNotesFromLocalStorage(state, notes) {
      state.notes = notes;
    },
    setNote(state, note) {
      state.notes.push(note);
      setItemToLocalStorage(state.notes);
      // localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    delNote(state, index) {
      state.notes.splice(index, 1);
      setItemToLocalStorage(state.notes);
      // localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    delNoteSearch(state, note) {
      state.notes.find((item) =>
        item === note ? state.notes.splice(state.notes.indexOf(item), 1) : item
      );
      setItemToLocalStorage(state.notes);
      // localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
  actions: {
    setNotesFromLocalStorage({ commit }) {
      // const notesInStorage = JSON.parse(localStorage.getItem("notes"));
      const notesInStorage = JSON.parse(getItemFromLocalStorage());
      commit("setNotesFromLocalStorage", notesInStorage ? notesInStorage : []);
    },
    setNote({ commit }, note) {
      commit("setNote", note);
    },
    delNote({ commit }, index) {
      commit("delNote", index);
    },
    delNoteSearch({ commit }, note) {
      commit("delNoteSearch", note);
    },
  },
  getters: {
    getAllNotes(state) {
      return state.notes;
    },
    getNotesLength(state, getters) {
      const suffix = "Количество заметок:";
      return `${suffix} ${getters.getAllNotes.length}`;
    },
    getNoteByText: (state) => (text) => {
      return text
        ? state.notes.filter((item) => item.title.indexOf(text) !== -1)
        : item;
    },
    getNoteByTag: (state) => (text) => {
      return state.notes.filter((item) => {
        item.tags.some(text);
      });
    },
  },
});

export default store;
