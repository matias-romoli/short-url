import { createTableIfNotExists } from "./controllers/controllers.js";
import { router } from "./routes/routes.js";
import express from "express";
import path from "path";
import cors from "cors";
const app = express();

//port
const PORT = process.env.PORT || 8080;

//SRR - Server-Side Rendering
app.use(express.static(path.join(path.resolve(), "client/dist")));
app.use(express.json());
app.use(cors());

async function startServer() {
  await createTableIfNotExists();
  app.use("/", router);

  app.listen(PORT, () => {
    console.log("listening on");
  });
}

startServer();
