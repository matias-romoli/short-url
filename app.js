import { router } from "./routes/routes.js";
import express from "express";
import path from "path";
import cors from "cors";
const app = express();

//port
const PORT = process.env.PORT || 8080;

//SRR - Server-Side Rendering
app.use(express.static(path.join(path.resolve(), "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "client/dist/index.html"));
});

app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("listening on");
});
