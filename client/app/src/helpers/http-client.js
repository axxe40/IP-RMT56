import axios from 'axios'

export const p2Api = axios.create({
    baseURL: "https://yourguitar-api.frenval.cloud/"
})