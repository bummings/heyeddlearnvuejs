////////////////// okay bruh
////////////////// time to shut your goddamn mouth 
////////////////// and learn vue.js



// 1. this brotha showin us v-directives

//HTML
<div id="app">
  <p> {{ saySup }} - <a href="{{ link }}"> Bummings.io </a></p>
</div>

// JS
new Vue ({
  el: '#app',
  data: {
    title: 'sup cuz',
    link: 'http://bummings.io'
  },
  methods: {
    saySup: function() {
      return this.title;
    }
  }
});

//so instead of using 'link' interpolation in the html, we can
//use v-bind so as to not parse the curly braces, whitespace, whatever

<div className="" id="app">
  <p> {{ saySup }} - <a v-bind:href="link"></a></p>
</div>


