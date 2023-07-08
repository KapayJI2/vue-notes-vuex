const notesLocalStorage = localStorage.getItem("notes");
// const localStorageNotes = notesLocalStorage ? notesLocalStorage : [];

// export default localStorageNotes;

export const setItemToLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
export const getItemFromLocalStorage = () => {
  return notesLocalStorage;
};
