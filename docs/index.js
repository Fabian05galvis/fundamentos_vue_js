//instanciamo vue js 3.0
const { createApp } = Vue;

createApp({
  data() {
    return {
      titulo: "GIM con VUE JS",
      tareas: [],
      nuevaTarea: "",
    };
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      this.nuevaTarea = "";
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    editarTarea(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    eliminarTarea(index) {
      //this.tareas.
      //console.log("Eliminare la tarea con index: " + index);
      this.tareas.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    saveTask() {
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
  },
  //se ejecuta apenas inicia js
  created() {
    //get data from local storage
    let datosBd = JSON.parse(localStorage.getItem("gym-vue"));

    if (datosBd == null) {
      this.tareas = [];
    } else {
      this.tareas = datosBd;
    }
  },
}).mount("#app");
