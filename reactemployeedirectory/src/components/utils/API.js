import axios from "axios";
// const BASEURL1 = "https://dog.ceo/api/breed/";
// const BASEURL2 = "/images/random";
// eslint-disable-next-line
export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  
  // search: function (query) {
  //   return axios.get(BASEURL1 + query + BASEURL2);
  // }
};
