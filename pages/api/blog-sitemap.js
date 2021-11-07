const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import fs from "fs";
import { getAllPostsForHome } from 'lib/api'

const sitemapBlog = async (req, res) => {

  const allPosts = await getAllPostsForHome();
  console.log(allPosts)

  const baseUrl = 'https://www.cfccapital.cl';

  const staticPages = allPosts
  .map((item) => {
    return `${baseUrl}/prensa/${item.slug}`;
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