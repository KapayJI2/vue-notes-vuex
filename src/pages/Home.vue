<template>
  <Form @onSubmit="handleSubmit" :itemsLength="getNotesLength" />
  <Search @onSearch="handleSearch" @onRemoveSearch="handleRemoveFromSearch" />
  <List @onRemove="handleRemove" :items="getAllNotes" v-if="!isSearchOn" />
</template>
<script>
import Form from "@/components/Notes/Form";
import Search from "@/components/Notes/Search";
import List from "@/components/Notes/List";
export default {
  components: {
    Form,
    Search,
    List,
  },
  data() {
    return {
      isSearchOn: false,
    };
  },
  mounted() {
    this.$store.dispatch("setNotesFromLocalStorage");
  },
  methods: {
    handleSubmit(title) {
      const note = {
        title: title[0],
        tags: title[1],
      };
      this.$store.dispatch("setNote", note);
    },
    handleRemove(index) {
      this.$store.dispatch("delNote", index);
    },
    handleRemoveFromSearch(note) {
      // console.log(note);
      this.$store.dispatch("delNoteSearch", note);
    },
    handleSearch() {
      this.isSearchOn = !this.isSearchOn;
    },
  },
  computed: {
    getAllNotes() {
      return this.$store.getters.getAllNotes;
    },
    getNotesLength() {
      const notesLength = this.$store.getters.getNotesLength;
      return notesLength ? notesLength : 0;
    },
  },
};
</script>
