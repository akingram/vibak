import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("builds a Vite React app with Vibak metadata", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const assets = await readdir(new URL("../dist/assets/", import.meta.url));

  assert.match(
    html,
    /<title>Vibak Cleaning Services \| Professional Cleaning in Cheshire East<\/title>/,
  );
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /\/assets\/index-.*\.js/);
  assert.match(html, /\/assets\/index-.*\.css/);
  assert.ok(assets.some((asset) => asset.endsWith(".js")));
  assert.ok(assets.some((asset) => asset.endsWith(".css")));
});

test("keeps the site on React and Express", async () => {
  const [app, packageJson, devServer] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../server/dev.js", import.meta.url), "utf8"),
  ]);

  assert.match(app, /Vibak Cleaning Services/);
  assert.match(app, /Client-focused cleaning that listens first/);
  assert.match(app, /Domestic Cleaning/);
  assert.match(app, /Crewe, Nantwich, Northwich, and Winsford/);
  assert.match(packageJson, /"dev": "node server\/dev\.js"/);
  assert.match(packageJson, /"express"/);
  assert.doesNotMatch(packageJson, /next|vinext|wrangler|drizzle/i);
  assert.match(devServer, /express/);
  assert.match(devServer, /createViteServer/);
});
