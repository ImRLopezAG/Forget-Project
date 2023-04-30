import { Base } from '@/constant/interface'
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000
})

export default class Service<Entity extends Base> {
  private readonly url: string

  constructor (url: string) {
    this.url = url
  }

  public getList = async (): Promise<Entity[]> => {
    return (await instance.get(`/${this.url}/List`)).data
  }

  public get = async (id: string): Promise<Entity> => {
    return (await instance.get(`/${this.url}/Get/${id}`)).data
  }

  public create = async (entity: Entity): Promise<Entity> => {
    return (await instance.post(`/${this.url}/Create`, entity)).data
  }

  public update = async (id: string, entity: Entity): Promise<Entity> => {
    return (await instance.put(`/${this.url}/Update/${id}`, entity)).data
  }

  public delete = async (id: string): Promise<void> => {
    await instance.delete(`/${this.url}/Delete/${id}`)
  }
}
