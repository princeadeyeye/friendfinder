import Axios from 'axios';

export class RestDataSource {
	constructor(base_url) {
		this.BASE_URL = base_url
	}

	GetData(callback) {
		this.SendRequest('get', this.BASE_URL, callback)
	}

	async GetOne(id, callback) {
		this.SendRequest('get', `${this.BASE_URL}/${id}`, callback)
	}

	async Register(data, callback) {
		this.SendRequest('get', `${this.BASE_URL}/auth/create-user/`, callback)
	}

	async Login(data, callback) {
		this.SendRequest('get', `${this.BASE_URL}/auth/signin`, callback)
	}

	async SendRequest (method, url, callback, data) {
		callback((await Axios.request({
			method: method,
			url: url,
			data: data
		})) .data)
	}
}