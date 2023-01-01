const httpfetch = () => {
  //fetch, permite realizar peticiones http a api
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((element) => {
        console.log(element.name);
        console.log(element.url);
      });
    })
    .catch((error) => console.log(error));
};

//async await
const obtenerPokemones = async () => {
  try {
    console.log("start request with await");

    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    /*
    data.results.forEach((element) => {
      console.log(element.name);
      console.log(element.url);
    });*/

    //map hace copia de acuerdo al object indicado o el elemento completo
    const names = data.results.map((poke) => poke.name);
    //console.log(names);

    //.filter con funcion flecha solo obtiene los que cumple con la condicion dada
    const namesfilter = data.results.filter((poke) => poke.name != "bulbasaur");
    console.log(namesfilter);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
