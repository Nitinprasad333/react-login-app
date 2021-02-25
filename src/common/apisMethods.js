import { axiosInst as axios } from "./axiosInstanse";

export const getAllPosts = async (url) => {
  console.log("getAllPosts api methods Value ==>", url);
  return await axios.get(url);
};

export const getSinglePost = async (url, params) => {
  console.log("getSinglePost api methods Value ==>", url, params);
  return await axios.get(url, params);
};
