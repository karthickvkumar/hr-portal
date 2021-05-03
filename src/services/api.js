import axios from 'axios';

class Api{

  async getAPI(url){
    return await axios.get(url);
  }

  async postAPI(url, data){
    return await axios.post(url, data);
  }
}

export default new Api();