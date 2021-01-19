import axios from 'axios';
import { GET_POST_URL } from './apiUrl';

export const getPostsApi=()=>{
  return  axios.get(GET_POST_URL).then((rst)=>{
   return rst;
    })
}