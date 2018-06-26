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

// We are using the v-on:click directive to employ the INCREASE
// method, and thus displaying the counter total in real time


// USING EVENT DATA FROM THE EVENT OBJECT
// using X and Y coordinates, for example

// HTML *x and y are connected to the event object, z is static
  <div id="app">
    <h1 v-on:mousemove='updateCoordinates'>Coords:   {{x }} / {{ y }} / {{ z }} </h1>
  </div>

//JS
new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0,
    z: 'bruh'
  },
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.z = "say bruh"
    }
  }
});

// the clientX, clientY props are event object props and the X, Y variables
// are hooked up to those in the Vue method definitions- Z is updated, but not
// yknow, dynamically or anything- it's just reassigned in the methods defs.

// PASSING YOUR OWN ARGUMENTS 
// with the counter, for example:

new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increase: function(step) {
      this.counter += step;
    }
  }
});

// so in the HTML we specify the argument that's passed into
// this function, in this particular the steps that are added

// HTML
<div id="app">
    <button v-on:click='increase(19)'>CLICK DAT</button>
    <p> {{ counter }} </p>
</div>

// and thus we're met with an argument of 19 which will pass into the
// function defined in our methods and blah blah blah yes edd we get it



// STOP PROPAGATION: what is it, why use it, who is this man 
// cooking eggs in my kitchen

// using the coordinates demo, we'll create a 'dead zone' that will mark a
// span element as none coordinate'd, or something

//HTML
<div id="app">
  <h1 v-on:mousemove='updateCoordinates'>Coords:   {{x }} / {{ y }}     
  <span class='shhh' v-on:mousemove='nah'>Shhh</span> </h1> 
</div>


//JS
new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0,
    z: 'bruh'
  },
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.z = "bruh!!"
    },
    nah: function(event) {
      event.stopPropagation();
    }
  }
});

// you possess now two methods with two very different functions.
// method one, updateCoordinates, will- yknow- update the damn coordinates.
// method two, nah, will halt that event from propagating

// this is well and good and all but yo
// instead of creating a whole 'nother method to stop that propagation, you
// can just use a MODIFIER on the mthrfkn EVENT, dawg

//thus
<div id="app">
  <h1 v-on:mousemove='updateCoordinates'>Coords:   {{x }} / {{ y }}     
  <span class='shhh' v-on:mousemove.stop=''>Shhh</span> </h1> 
</div>


// KEY EVENTS + KEY MODIFIERS, ah

//HTML
<div id="app">
  <input type="text" v-on:keyup.enter='alertMe'>
</div>

//JS
new Vue({
  el: '#app',
  data: {
    //dude whatever
  },
  methods: {
    alertMe: function() {
      alert('yo cuz');
    }
  }
});

// using the modifiers like .enter or .space we can identify specific 
// keys to trigger an event, like this really annoying alert




// WHOA TWO WAY DATA BINDING
// in which we are pushing data in and not just just retrieving it from
// abitrary variables in the app.js file

// this is a input form which will modify the page's h1

//HTML
<div id="app">
  <input type="text" v-model:'name'>
  <p> {{ name }} </p>
</div>


//JS 
new Vue ({
  el: '#app',
  data: {
    name: 'Faux'
  }
});


// COMPUTED VALUES
// in the interest of efficiency, computed values are cool because they only
// update when they *have* to and are not endlessly evaluated: they ain't measured
// over and over and over and over again because the value is CACHED until it
// changes, dawg- using the a function as defind in the Vue's methods will evaluate 
// the prop every single time a property is changed and the page refreshes, such as 
// when a button is clicked and a counter is incremented / decremented on a page 
// element like an h1 or a div, &c.    ALSO, all computed properties are functions

// ALSO WORTH NOTING that when referencing the computed value you're only refering
// to it by just the name and not with parentheses like you were calling, yknow, 
// a goddamn function


// SHORTHAND for directives

// v-on:click can be replaced with @, thus:

<button v-on:click='changeLink'>bruh change that link</button>
<button @click='changeLink'>bruh right now change it</button>

// v-bind can be replaced with just a simple colon-
<button v-bind:href='url'>click dis one bruh</button>
<button :href='url'>click dis one bruh</button>




