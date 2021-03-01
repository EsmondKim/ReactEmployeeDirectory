import axios from "axios";

// eslint-disable-next-line
export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/");
  },
};


// import axios from "axios";

// // eslint-disable-next-line
// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   },
// };
