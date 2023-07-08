<template>
  <div class="search-field">
    <button class="btn" @click="onSearch">
      {{ btnName }}
    </button>
    <div v-if="isSearchOn">
      <div class="search-field__radio-wrapper">
        <p class="search-field__radio-text">
          <input
            class="search-field__radio"
            type="radio"
            name="search"
            :value="{ isTag: false, isText: true }"
            v-model="conditionSearch"
          />По тексту
        </p>
        <div>
          <!-- <p class="search-field__radio-text">
            <input
              class="search-field__radio"
              type="radio"
              name="search"
              :value="{ isTag: true, isText: false }"
              v-model="conditionSearch"
            />По тегу
          </p> -->
          <div v-if="conditionSearch.isTag" class="search-field__checked">
            <p class="search-field__checked-el-text">
              <input
                class="search-field__checked-el"
                type="checkbox"
                name="check"
                value="work"
                v-model="tag"
              />work
            </p>
            <p class="search-field__checked-el-text">
              <input
                class="search-field__checked-el"
                type="checkbox"
                name="check"
                value="home"
                v-model="tag"
              />home
            </p>
            <p class="search-field__checked-el-text">
              <input
                class="search-field__checked-el"
                type="checkbox"
                value="travel"
                v-model="tag"
              />travel
            </p>
          </div>
        </div>
      </div>
      <div v-if="conditionSearch.isText">
        <input
          class="search-field"
          type="text"
          v-model="title"
          placeholder="поиск по тексту"
        />
        <List
          :items="getNoteByText"
          @onRemoveFound="handleRemoveFound"
          :isSearchOn="this.isSearchOn"
        />
      </div>
      <!-- <div v-if="conditionSearch.isTag">
        <List
          :items="getNoteByTag"
          @onRemoveFound="handleRemoveFound"
          :isSearchOn="this.isSearchOn"
        />
      </div> -->
    </div>
  </div>
</template>
<script>
import List from "@/components/Notes/List";
export default {
  components: { List },
  data() {
    return {
      title: "",
      tag: [],
      isSearchOn: false,
      btnName: "Открыть поиск",
      conditionSearch: {
        isTag: false,
        isText: false,
      },
    };
  },
  methods: {
    onSearch() {
      this.isSearchOn = !this.isSearchOn;
      this.isSearchOn
        ? (this.btnName = "Закрыть поиск")
        : (this.btnName = "Открыть поиск");
      this.$emit("onSearch", this.isSearchOn);
      this.title = "";
    },
    handleRemoveFound(note) {
      this.$emit("onRemoveSearch", note);
    },
  },
  computed: {
    getNoteByText() {
      return this.title.length
        ? this.$store.getters.getNoteByText(this.title)
        : [];
    },
    getNoteByTag() {
      return this.tag.length ? this.$store.getters.getNoteByTag(this.tag) : [];
    },
  },
};
</script>
<style>
.search-field {
  margin: 20px 0 0 0;
}
.search-field__radio-wrapper {
  display: flex;
}
.search-field__radio {
  width: auto;
  height: 20px;
  margin-right: 10px;
}
.search-field__radio-text {
  width: 120px;
  height: 20px;
  font-size: 14px;
}
.search-field__checked {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.search-field__checked-el,
.search-field__checked-el-text {
  margin: 10px 5px 10px 5px;
}
</style>
