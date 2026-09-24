import express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { handleServiceRequest } from "./serviceRequests.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(root, "../dist");

app.use(express.json({ limit: "24kb" }));
app.post("/api/service-requests", handleServiceRequest);
app.use(express.static(dist));

app.use((_request, response) => {
  response.sendFile(path.join(dist, "index.html"));
});

app.listen(port, () => {
  console.log(`Local: http://localhost:${port}/`);
});
