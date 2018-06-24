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




// new Vue({
//   el: '#app',
//   data: {
//     x: 0,
//     y: 0,
//     z: 'bruh'
//   },
//   methods: {
//     updateCoordinates: function(event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//       this.z = "say bruh"
//     }
//   }
// })