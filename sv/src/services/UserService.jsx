import axios from 'axios'

const USER_BASE_REST_API_URL = 'https://localhost:7015/api/User';

class UserService {

    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL, {headers: {'Authorization' : 'Bearer ' + localStorage.getItem("token"), 'Content-Type': 'application/json'}})
    }

    getUserByUsername(username) {
        return axios.get(USER_BASE_REST_API_URL + '/user?username=' + username);
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user);
    }
}

export default new UserService();