import axios from 'axios';
import url from '../config';


let  defUrl = url + "/personas";

class PersonsService {

    getPersons(){
        return axios.get(defUrl);
    }

    createPersons(personsData){
        return axios.post(defUrl, personsData);
    }

    getPersonsById(id){
        return axios.get(defUrl + '/' + id);
    }

    // updatePersons(personsData, id){
    //     return axios.put(url + '/' + id);
    // }

    deletePersons(id){
        return axios.delete(defUrl + '/' + id);
    }
}

export default new PersonsService()