//object
const mascota = {
  name: "Keyna",
  edad: 2,
  dueno: "erika",
  razas: ["peludo", "negro"],
};

console.log(mascota);

//destructuring
const { edad, name } = mascota;

console.log(edad);
console.log(name);

const web = {
  name: "zencillo",
  link: {
    enlace: "www.zencillo.com",
  },
  socialNetwork: {
    youtube: "www.youtube.com/zencillo",
    channel: "zencillo",
  },
};

const { youtube, channel } = web.socialNetwork;

console.log(youtube);
console.log(channel);
