import { useEffect, useState } from "react";
import { getHistoricalKandles } from "../API/GetHistoricalKandles";
import HistoricalChart from "./Graphics/HistoricalChart";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Graphics() {
	return (
		<Box sx={{ flexGrow: 1 }} className="graphics">
			<HistoricalChart />
			<Grid container spacing={4}>
				<Grid item xs={4} className="item-statistic">
					<Item>B1</Item>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Graphics;
