<template>
  <div>
    <router-link to="/books/new">New</router-link>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="{ name: 'editBook', params: { id: book.id }}">{{book.name}}</router-link>
        {{book.price}}
        <router-link :to="{ name: 'show-book', params: { id: book.id }}">{{book.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        books: []
      }
    },
   
    methods: {
      async fetchBooks(){
        const {data} = await axios.get('/books')
        this.books = data
      }
    },

    beforeMount(){
      this.fetchBooks()
    }
  }
</script>