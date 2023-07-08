<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        required
        name="newTitle"
        v-model="value"
        placeholder="Type ur note"
      />
      <TagsList
        @onTagClick="handleTagClick"
        :items="tags"
        :selectTags="selectTags"
      />
      <button class="btn btnPrimary" type="submit">Add new note</button>
      <!-- <p style="color: red">{{ errorMessage }}</p> -->
    </form>
  </div>
</template>
<script>
import TagsList from "@/components/UI/TagsList";
export default {
  components: { TagsList },
  data() {
    return {
      value: "",
      tags: ["home", "work", "travel"],
      selectTags: [],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", [this.value, this.selectTags]);
      this.value = "";
      this.selectTags = [];
    },
    handleTagClick(payload) {
      if (this.selectTags.indexOf(payload.item) != -1) {
        this.selectTags.splice(this.selectTags.indexOf(payload.item), 1);
      } else {
        this.selectTags.push(payload.item);
      }
    },
  },
};
</script>
<style lang="scss">
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.selected-tags_header {
  align-items: center;
}
.selected-tags_body {
  display: flex;
  justify-content: center;
  font-size: 10px;
}
.selected-tags_items {
  padding: 10px;
  color: green;
  font-size: 10px;
}
</style>
