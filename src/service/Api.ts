import axios from 'axios';

export default ()=>{
    return axios.create({
        baseURL:'https://itunes.apple.com/search?term=john'
    })
}