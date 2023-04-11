import axios from 'axios'
import { IUserModel } from '@/interface/interface'
import { BASE_URL } from '@env'

const LOGIN_URL = `${BASE_URL}/api/mobile/login`

export const login = (email: string, password: string) => {
    return axios.post<IUserModel>(LOGIN_URL, {
        email,
        password
    })
}