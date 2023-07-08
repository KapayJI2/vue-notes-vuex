<template>
  <div>
    <p class="title">В этом приложении:</p>
    <ul>
      <li v-for="(item, index) in about" :key="index">
        &#9745; {{ item.element }}
      </li>
    </ul>
    <br />
    <p>
      Пройдены курсы
      <a href="https://tocode.ru/" target="_blank"
        >"Vue.js 3 - практическое руководство с нуля до результата!"</a
      >
    </p>
  </div>
</template>
<script>
import { aboutInfo } from "@/_config";
export default {
  data() {
    return {
      about: aboutInfo,
    };
  },
};
</script>
