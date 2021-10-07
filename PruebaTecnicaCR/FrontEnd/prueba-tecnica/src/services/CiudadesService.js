import axios from 'axios';
import url from '../config';



let  defUrl = url + "/ciudades";
class CiudadesService {
    getCiudades(){
        return axios.get(defUrl);
    }

    getCiudadesById(id){
        return axios.get(defUrl + '/' + id);
    }
}

export default new CiudadesService()