new Vue({
  el: '#app',

  data: {
    counter: 0,
    x: 0,
    y: 0,
    z: 'bruh',
    name: 'faux'
  },

  computed {
    
  },

  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.z = "bruh!"
    },
 
    increase: function(step) {
      this.counter += step;
    },

    alertMe: function() {
      alert('yo cuz');
    }
  }
});