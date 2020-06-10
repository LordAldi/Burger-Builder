import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-646bd.firebaseio.com/'
});

export default instance;