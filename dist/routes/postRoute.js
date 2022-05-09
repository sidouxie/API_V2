"use strict";
exports.__esModule = true;
var express_1 = require("express");
var postController = require("../controllers/postController");
var route = (0, express_1.Router)();
route.post("/", postController.addPost);
route.get("/", postController.getPosts);
exports["default"] = route;
//# sourceMappingURL=postRoute.js.map