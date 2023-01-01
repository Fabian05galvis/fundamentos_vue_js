//instanciamos vue js
/*const app = new Vue({
    el: '#app',
    data : {
        title: 'Hello worlod con vue js'
    }
})*/

//instanciamo vue js 3.0
const { createApp } = Vue;

createApp({
  data() {
    return {
      fondo: "bg-warning",
      color: false,
    };
  },
}).mount("#app");
