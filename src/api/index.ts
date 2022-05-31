import server from '@/utils/server'
import { HttpResponse } from './httpResponse'

export class HomeService {
    static async queryList(data: any): Promise<HttpResponse> {
        return server('/WgActivityTopics/list', {
            method: 'post',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    }
}
