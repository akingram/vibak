import express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(root, "../dist");

app.use(express.static(dist));

app.use((_request, response) => {
  response.sendFile(path.join(dist, "index.html"));
});

app.listen(port, () => {
  console.log(`Local: http://localhost:${port}/`);
});
