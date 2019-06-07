import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewBook from "./components/Books/NewBook.vue";
import EditBook from "./components/Books/EditBook.vue";
import BookDetails from "./components/Books/BookDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [{
        path: "/books/:id",
        name: "show-book",
        component: BookDetails,
        props: true
      }]
    },
    {
      path: "/books/new",
      name: "new-book",
      component: NewBook
    },
    {
      path: "/books/:id/edit",
      name: "editBook",
      component: EditBook,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
