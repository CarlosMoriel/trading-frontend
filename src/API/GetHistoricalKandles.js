import { API_CONST } from "./Const";
import axios from "axios";

const instance = axios.create();

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;
instance.defaults.baseURL = API_CONST.HOST;
instance.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const getHistoricalKandles = () => {
	// GET request for remote image in node.js
	instance
		.get(API_CONST.HOST + API_CONST.GET_HISTORICAL_KANDLES_BETWEEN_DATES_ENPOINT, {
			timeout: 5000,
		})
		.then((response) => {
			console.log(response.data);
		});
};

export { getHistoricalKandles };
