<template>
  <div>
    <form id="fill-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" v-model="book.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" v-model="book.price" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      book: {}
    };
  },
  methods: {
    async onSubmit() {
      const { data } = await axios.post("/books", this.book);
      this.$router.push('/')
    }
  }
};
</script>
