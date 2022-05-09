import express from "express";
import cors from "cors";
import "dotenv";
import route from "./routes/postRoute";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  allowHeaders: [
    "Accept",
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Origin",
  ],
  exposedHeaders: ["Content-Length", "X-JSON"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use("/api/post", route);

app.listen(PORT, () => {
  console.log(`server started listenning on port : http://localhost:${PORT}`);
});
