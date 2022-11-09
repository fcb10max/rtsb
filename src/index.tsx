import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Page from "./pages/Page1";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/page" element={<Page />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);
