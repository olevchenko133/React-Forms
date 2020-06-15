import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID HkjX0Q56MYsqUsKfPTL5w74MlOg-Tuv-B1NK3Ej4NOE",
    }
})