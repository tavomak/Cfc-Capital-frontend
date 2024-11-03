import { getAllPosts } from '@/utils/lib/api';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const sitemapBlog = async (req, res) => {
  const {
    data: { posts: allPosts },
  } = await getAllPosts();

  const baseUrl = 'https://www.cfccapital.cl';

  const staticPages = allPosts.map((item) => `${baseUrl}/prensa/${item.slug}`);

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(staticPages).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default sitemapBlog;
