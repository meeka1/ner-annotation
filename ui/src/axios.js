import axios from "axios";

const instance = axios.create({
  baseURL: "https://annotator-api.test2.alifdev.uz",
  timeout: 3000,
});

export default instance;
