import axios from 'axios';

export default axios.create({
    baseURL:'http://172.20.10.3:8800/mobile/'
})