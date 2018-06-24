new Vue({
  el: "#app",
  data: {
    title: 'this is a title.',
    link: 'http://bummings.io',
    finished: '<h1><a href="http://fauxkno.com">Faux</a></h1>'
  },
  methods: {
    sayTitle: function () {
      this.title = 'nah';
      return this.title;
    }
  }
});