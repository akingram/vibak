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
  const [htmlSource, app, packageJson, devServer, prodServer, vercelApi] = await Promise.all([
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../server/dev.js", import.meta.url), "utf8"),
    readFile(new URL("../server/index.js", import.meta.url), "utf8"),
    readFile(new URL("../api/service-requests.js", import.meta.url), "utf8"),
  ]);

  assert.match(app, /Vibak Cleaning Services/);
  assert.match(app, /Fresh spaces\. Clear requests\. Carefully cleaned/);
  assert.match(app, /Cheshire East cleaning, made simple/);
  assert.match(app, /Choose the clean that fits your property/);
  assert.match(app, /Find the right starting point/);
  assert.match(app, /Request this service/);
  assert.match(app, /quote-split-band/);
  assert.match(app, /contact-choice-band/);
  assert.match(app, /initialRequestFromUrl/);
  assert.match(app, /Domestic Cleaning/);
  assert.match(app, /Crewe, Nantwich, Northwich, and Winsford/);
  assert.match(app, /Built around careful work and clear communication/);
  assert.match(app, /We listen first, then clean with care/);
  assert.match(app, /In-depth screening/);
  assert.match(app, /Property size/);
  assert.match(app, /Products and equipment/);
  assert.match(app, /menu-toggle/);
  assert.match(app, /aria-controls="site-menu"/);
  assert.match(app, /mobile-menu-quote/);
  assert.doesNotMatch(app, /launch-standard|No borrowed testimonials|Request concierge|New company/);
  assert.match(packageJson, /"dev": "node server\/dev\.js"/);
  assert.match(packageJson, /"express"/);
  assert.doesNotMatch(packageJson, /next|vinext|wrangler|drizzle/i);
  assert.match(devServer, /express/);
  assert.match(devServer, /createViteServer/);
  assert.match(prodServer, /sendFile/);
  assert.match(vercelApi, /handleServiceRequest/);
  assert.match(vercelApi, /request\.method !== "POST"/);
  assert.doesNotMatch(
    `${htmlSource}\n${app}\n${packageJson}\n${devServer}\n${prodServer}\n${vercelApi}`,
    /openai|chatgpt|codex/i,
  );
});

test("defines real multi-page routes", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");

  assert.match(app, /href: "\/services"/);
  assert.match(app, /href: "\/request-service"/);
  assert.match(app, /href: "\/about"/);
  assert.match(app, /href: "\/contact"/);
  assert.match(app, /function ServicesPage/);
  assert.match(app, /function RequestServicePage/);
  assert.match(app, /function AboutPage/);
  assert.match(app, /function ContactPage/);
  assert.match(app, /function LaunchPanel/);
  assert.match(app, /reference-service-grid/);
  assert.match(app, /screening-fieldset/);
});

test("includes Vercel import settings", async () => {
  const vercelConfig = JSON.parse(
    await readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  );

  assert.equal(vercelConfig.buildCommand, "npm run build");
  assert.equal(vercelConfig.outputDirectory, "dist");
  assert.ok(
    vercelConfig.rewrites.some(
      (rewrite) =>
        rewrite.source === "/request-service" && rewrite.destination === "/index.html",
    ),
  );
});
