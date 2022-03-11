import axios from "axios"


const getData = () => {
	return axios.get("/api/current").then(r => r.data)
}

const sericeExports = {getData}

export default sericeExports