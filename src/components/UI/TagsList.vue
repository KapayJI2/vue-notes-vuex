<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="(item, index) in items"
      :key="item"
      @click="selectTag(item, index)"
      :class="{
        isPreview: isPreview,
        isActive: selectTags != undefined && selectTags.indexOf(item) != -1,
      }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectTags: {
      type: Array,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tagsArr: [],
    };
  },
  methods: {
    selectTag(item, index) {
      if (this.tagsArr.indexOf(item) != -1) {
        this.tagsArr.splice(this.tagsArr.indexOf(item), 1);
      } else {
        this.tagsArr.push(item);
      }
      this.$emit("onTagClick", { item, index });
    },
  },
};
</script>
<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: "#";
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
