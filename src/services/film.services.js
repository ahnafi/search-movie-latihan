import axios from "axios";
const key = import.meta.env.VITE_APIKEY;
const url = import.meta.env.VITE_BASEURL;
export const getMovie = (src, callback) => {
  axios
    .get(`${url}?apikey=${key}&s=${src}`)
    .then((res) => {
      callback(res.data.Search);
    })
    .catch((err) => {
      alert(err);
    });
};
export const searchIdMovie = (id, callback) => {
  axios
    .get(`${url}?apikey=${key}&i=${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      alert(err);
    });
};
