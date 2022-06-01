import server from '@/utils/server'
import { HttpResponse } from './httpResponse'
// 想不low就别any
interface Login {
    password: Number
    user: Number
}
export class HomeService {
    static async Login(data: Login): Promise<HttpResponse> {
        return server('/Login', {
            method: 'post',
            data: data
        })
    }
}
