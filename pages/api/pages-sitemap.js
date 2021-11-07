const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import fs from "fs";

const sitemapBlog = async (req, res) => {

  const baseUrl = 'https://www.cfccapital.cl';

  const staticPages = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return ![
      "_app.js",
      "_document.js",
      "_error.js",
      "404.js",
      ".DS_Store",
      "api"
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    if (staticPagePath === "index.js") {
      return baseUrl;
    }
    return `${baseUrl}/${staticPagePath}`;
  });

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(staticPages).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default sitemapBlog;