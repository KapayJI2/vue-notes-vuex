<template>
  <h1>Только обычные пользователи</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? "Это админ" : "Обычный юзер" }}</p>
    </li>
  </ul>
  <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>
