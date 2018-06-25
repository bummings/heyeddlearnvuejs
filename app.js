new Vue({
  el: '#app',

  data: {
    counter: 0,
    result: 0,
    x: 0,
    y: 0,
    z: 'bruh',
    name: 'faux',
    turnRed: false
  },

  computed: {
    output: function() {
      return this.counter > 25 ? 'greater than 25' : 'less than 25';
    }
  },

  methods: {
    increase: function(step) {
      this.counter += step;
    },

    decrease: function(step) {
      this.counter -= step;
    },
    
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.z = "bruh!"
    },

    alertMe: function() {
      alert('yo cuz');
    }
  }
});