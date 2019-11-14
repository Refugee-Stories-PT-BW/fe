import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseUrl: 'https://refugee-stories-api19.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}