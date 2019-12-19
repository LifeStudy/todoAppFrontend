import axios from 'axios';


const URL = 'http://localhost:3003/api/todos'


const api = axios.create({
    baseURL: URL //process.env.REACT_APP_API_URL
});


export {URL}

export default api;