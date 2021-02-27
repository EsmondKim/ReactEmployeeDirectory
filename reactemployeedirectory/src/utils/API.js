import axios from "axios";
const BASEURL1 = "https://dog.ceo/api/breed/";
const BASEURL2 = "/images/random";
export default {
  search: function (query) {
    return axios.get(BASEURL1 + query + BASEURL2);
  },
};
