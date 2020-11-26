import axios from 'axios';

const instance = axios.create ({
    baseURL:"https://mern-tiktok-clone.herokuapp.com/",
});

export default instance;