import Axios from 'axios';
import { RestUrls } from './Url'

export class RestDataSource {
	constructor() {
	}

	async GetData(dataType) {
		this.SendRequest('get', RestUrls[dataType])
	}

	async create(data, dataType) {
		this.SendRequest('post', `${RestUrls[dataType]}/create-user`, data)
	}

	async login(data, dataType) {
		this.SendRequest('post', `${RestUrls[dataType]}/signin`, data)
	}
	async GetOne(data, dataType) {
		this.SendRequest('get', `${RestUrls[dataType]}/${data.id}`)
	}

	
	async deleteOne(data, dataType) {
		this.SendRequest('delete', `${RestUrls[dataType]}/${data.id}`)
	}

	async updateOne(data, dataType) {
		this.SendRequest('patch', `${RestUrls[dataType]}/${data.id}`)
	}

	async SendRequest (method, url, data) {
		(await Axios.request({
			method: method,
			url: url,
			data: data
		}))
	}
}