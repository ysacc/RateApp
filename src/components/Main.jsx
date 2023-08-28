import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Navigate, Redirect, Route, Routes, Switch } from "react-router-native";
import LogInPage from "../pages/Login.jsx";

const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/signin" element={<LogInPage />} />
			</Routes>
		</View>
	);
};

export default Main;
