import { API_CONST } from "./Const";
import axios from "axios";
import { serializeDataToChart } from "./Common";

const axiosInstance = axios.create();

axiosInstance.defaults.timeout = 2500;
axiosInstance.defaults.baseURL = API_CONST.HOST;
axiosInstance.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const getHistoricalKandles = () => {
	// GET request for remote image in node.js
	axiosInstance
		.get(API_CONST.HOST + API_CONST.GET_HISTORICAL_KANDLES_BETWEEN_DATES_ENPOINT, {
			timeout: 5000,
		})
		.then((response) => {
			console.log(response.data);
		});
};

export { getHistoricalKandles };
