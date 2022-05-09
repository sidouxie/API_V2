import { Router } from "express";
const postController = require("../controllers/postController");

const route = Router();

route.get("/", postController.getPosts);

export default route;
