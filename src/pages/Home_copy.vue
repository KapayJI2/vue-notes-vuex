<template>
  <div>
    <br />
    <br />
    <div v-if="isUserLogged">
      User is logged
      {{ user }}
    </div>
    <div v-else>
      <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 3,
    };
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch("setUser");
    },
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged;
    },
    user() {
      return this.$store.getters.getUser;
    },
    getAllUsers() {
      return this.$store.getters.getAllUsers;
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId);
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>
