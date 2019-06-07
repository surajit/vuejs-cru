<template>
  <div>
    <h4>Book Details</h4>
    <div>
      {{id}}
      {{book.name}}
    </div>
  </div>

</template>

<script>
import axios from 'axios'
  export default {
    props: {
      id: {
        required: true
      },
    },

    data() {
      return {
        book: []
      }
    },

    watch: {
      id() {
        this.showBook()
      }
    },

    methods: {
      async showBook(){
        const {data} = await axios.get(`/books/${this.id}`)
        this.book = data
      }
    },

    beforeMount(){
      this.showBook()
    }

    // methods: {
    //   toggle() {
    //     this.visible = !this.visible
    //   }
    // },

  }
</script>