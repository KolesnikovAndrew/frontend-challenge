import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/",
  timeout: 1000,
  headers: { "x-api-key": "8b44ad3d-af18-4fc6-ae03-8a7b2a5f05d4" },
});

export const restAPI = {
  getCats(page) {
    return instance
      .get(`search?limit=15&page=${page}&order=Desc`)
      .then((response) => response.data)
      .catch(
        (error) => {
          console.log(error);
        },
        {
          timeout: 10000,
        }
      );
  },
};
