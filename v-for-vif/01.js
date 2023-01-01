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
      title: "Hello Vue!",
      frutas: ["manzana", "pera", "platano"],
      frutas_objets: [
        { name: "Pera", count: 10 },
        { name: "Manzana", count: 0 },
        { name: "Banana", count: 155 },
      ],
    };
  },
}).mount("#app");
