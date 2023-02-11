
/*
import express from "express";
import db from "./database";
import courseRouter from "./router/courseRouter";
import projectRouter from "./router/projectRouter";

const app = express();

app.use(function (request, response, next) {
	response.setHeader("Access-Control-Allow-Origin", "*")
	response.setHeader("Access-Control-Allow-Methods", "*")
	response.setHeader("Access-Control-Allow-Headers", "*")
	response.setHeader("Access-Control-Expose-Headers", "*")
	next()
})

app.use("/sandbox", projectRouter);

app.use("/course", courseRouter);


*/