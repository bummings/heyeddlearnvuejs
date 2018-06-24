////////////////// okay bruh
////////////////// time to shut your goddamn mouth 
////////////////// and learn vue.js


/********************************************
 * SECTION 2 - in which we use Vue to 
 *             flirt with the DOM
 ********************************************/


// 1. this brotha showin us v-directives
// the verb here is 'BIND'- binding, to bind, bind bind bind
// We will BIND, or prepend, some kind of string literal
// to an element to produce some kind of formatted result, dig?

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

//no curly brace needed, just the name of the prop you're chasing-


//interpolating RAW HTML via interpolation

//JS
new Vue({
  el: "#app",
  data: {
    title: 'Sup bro',
    link: 'http://bummings.io',
    totalLink: '<a href="http://bummings.io">Bummings.io bruh</a>'
  }
});

//HTML

<div id="app">
  <p> {{ totalLink }} </p>
</div>

// This will only output a string of the RAW HTML
// So- guess what- there's another v-directive to employ


//HTML
<div id="app">
  <p v-html='totalLink'> </p>
</div>

// Note how this ain't a class name or an ID or an attribute, yada yada
// the V directive is inside of the element itself and calls the value
// as if it were a class or a ID- no interpolation within the <p> tags, 
// all data is embedded in the 'paragraph container', as it were




// 2. Click listeners, introduction to events or whatever
// Checkit: this is the opposite of binding- we don't wanna prepend
// nothing, our prerogative here is to listen for information
// as in, say, a click counter: using any DOM event we want



//HTML
<div id="app">
  <button v-on:click='increase'>CLICK DAT</button>
  <p> {{ counter }} </p>
</div>


//JS
new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increase: function() {
      this.counter++;

    }
  }
});

