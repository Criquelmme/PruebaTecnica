import axios from 'axios';
import url from '../config';


let  defUrl = url + "/regiones";

class RegionesService {

    getRegiones(){
        return axios.get(defUrl);
    }
}

export default new RegionesService()