import axios from 'axios';
import {ServerActions} from "./actions/ServerActions";

export const API = {
  fetchLinks() {
    return axios.get("/data/links")
      .then(({data}) => ServerActions.recieveLinks(data))
      .catch(error => console.error(error));
  }
}