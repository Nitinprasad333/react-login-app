import axios from 'axios';

export const axiosInst = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
      },
  });


  export const portalBlobAxios = axios.create({
    baseURL: '',
    timeout: 1000000,
    config: { responseType: "blob" },
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  export const imageUploadAxios = axios.create({
    baseURL: '',
    timeout: 1000000,
    headers: {
      "content-type": "multipart/form-data",
    },
  });