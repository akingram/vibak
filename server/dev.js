import express from "express";
import { readFile } from "node:fs/promises";
import { createServer as createViteServer } from "vite";

const app = express();
const port = Number(process.env.PORT ?? 3000);

const vite = await createViteServer({
  appType: "spa",
  server: {
    middlewareMode: true,
  },
});

app.use(vite.middlewares);

app.use(async (request, response, next) => {
  try {
    const template = await readFile("index.html", "utf8");
    const html = await vite.transformIndexHtml(request.originalUrl, template);

    response.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Local: http://localhost:${port}/`);
});
