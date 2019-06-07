<template>
  <div class="home">
    <BookList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Welcome from "@/components/Welcome.vue";
import BookList from "@/components/Books/BookList.vue";


export default {
  name: "home",
  components: {
    BookList
  }
};
</script>
