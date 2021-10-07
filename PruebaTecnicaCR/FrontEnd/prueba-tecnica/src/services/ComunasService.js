import axios from 'axios';
import url from '../config';


let  defUrl = url + "/comunas";

class ComunasService {
    
    getComunas(){
        return axios.get(defUrl);
    }

    getComunasById(id){
        return axios.get(defUrl + '/' + id);
    }
}

export default new ComunasService()