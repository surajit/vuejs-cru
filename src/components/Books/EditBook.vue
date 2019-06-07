<template>
  <div>
    <h1>#{{id}}</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" v-model="book.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" v-model="book.price" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  <router-link to="/">Back</router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['id'],

    data(){
      return {
        book: []
      }
    },

    methods: {
      async fetchBook(){
        const {data} = await axios.get(`/books/${this.id}`)
        this.book = data
      },

      async onSubmit(){
        const data = await axios.put(`/books/${this.id}`, this.book)
        this.$router.push('/')
      }
    },

    beforeMount(){
      this.fetchBook()
    }
  }
</script>