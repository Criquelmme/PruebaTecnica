import axios from 'axios';
import url from '../config';

class PersonsService {

    getPersons(){
        return axios.get(url);
    }

    createPersons(personsData){
        return axios.post(url, personsData);
    }

    getPersonsById(id){
        return axios.get(url + '/' + id);
    }

    // updatePersons(employee, id){
    //     return axios.put(url + '/' + id);
    // }

    deletePersons(id){
        return axios.delete(url + '/' + id);
    }
}

export default new PersonsService()