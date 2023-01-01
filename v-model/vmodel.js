//instanciamo vue js 3.0
const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hello Vue!",
      frutas: [
        { name: "Pera", count: 10 },
        { name: "Manzana", count: 0 },
        { name: "Banana", count: 155 },
      ],
      nueva_fruta: "",
    };
  },
  methods: {
    add_fruta() {
      this.frutas.push({
        name: this.nueva_fruta,
        count: 0,
      });

      this.nueva_fruta = "";
    },
  },
}).mount("#app");
