import server from '@/utils/server'
import { HttpResponse } from './httpResponse'

export class HomeService {
    static async Login(data: any): Promise<HttpResponse> {
        return server('/Login', {
            method: 'post',
            data: data
        })
    }
}
