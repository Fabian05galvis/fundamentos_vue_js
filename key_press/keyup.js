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
      nueva_cantidad: 0,
      total: 0,
    };
  },
  methods: {
    add_fruta() {
      this.frutas.push({
        name: this.nueva_fruta,
        count: this.nueva_cantidad,
      });

      this.nueva_fruta = "";
      this.nueva_cantidad = 0;
    },
  },
  computed: {
    sumarfrutas() {
      this.total = 0;

      for (fruta of this.frutas) {
        this.total += fruta.count;
      }

      return this.total;
    },
  },
}).mount("#app");
