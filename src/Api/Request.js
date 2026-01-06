import axios from "axios";

export const Urls = axios.create({
  baseURL: "https://api.vente.taliasante.com/",
  timeout: 900000,
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data",
  },
});
//
export const UrlsForm = axios.create({
  baseURL: "https://api.vente.taliasante.com/",
  timeout: 900000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const UrlsImage = "https://api.vente.taliasante.com/";
