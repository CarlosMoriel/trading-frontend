import { useEffect, useState } from "react";
import { getHistoricalKandles } from "../API/GetHistoricalKandles";
import HistoricalChart from "./Graphics/HistoricalChart";

function Graphics() {
	return <HistoricalChart />;
}

export default Graphics;
