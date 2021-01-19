import {axiosInst as axios} from './axiosInstanse';

export const getAllPosts = url => {
    console.log("getAllPosts api methods Value ==>",url)
    return axios.get(url);
    
  };