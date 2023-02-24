import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/Dashboard.css";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1 }} className="dashboard">
			<Grid container spacing={4}>
				<Grid item xs={3}>
					<Item className="item">A1</Item>
				</Grid>
				<Grid item xs={9}>
					<Grid container spacing={4}>
						<Grid item xs={4} className="item-statistic">
							<Item>B1</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>B2</Item>
						</Grid>
						<Grid item xs={4}>
							<Item>B3</Item>
						</Grid>
						<Grid item xs={3}>
							<Item>B4</Item>
						</Grid>
						<Grid item xs={3}>
							<Item>B5</Item>
						</Grid>
						<Grid item xs={3}>
							<Item>B6</Item>
						</Grid>
						<Grid item xs={3}>
							<Item>B7</Item>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Item>A3</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>A4</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
