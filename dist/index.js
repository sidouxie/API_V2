"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("dotenv");
var postRoute_1 = __importDefault(require("./routes/postRoute"));
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 3000;
var corsOptions = {
    allowHeaders: [
        "Accept",
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Origin",
    ],
    exposedHeaders: ["Content-Length", "X-JSON"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: true
};
app.use(express_1["default"].json());
app.use((0, cors_1["default"])(corsOptions));
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].static("./public"));
app.use("/api/post", postRoute_1["default"]);
app.listen(PORT, function () {
    console.log("server started listenning on port : http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map