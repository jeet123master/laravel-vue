export default {
	data(){
		return {

		}
	},
	methods: {
		callApi(method, url, dataOb) {
			try{
				return axios({
					method: method,
					url: url,
					data:dataOb
				});
			} catch(e){
				return e.response
			}
		}
	},
}