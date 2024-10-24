const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const sitemapBlog = async (req, res) => {
  const staticPages = [
    { url: '/' },
    { url: '/cfc' },
    { url: '/servicios' },
    { url: '/prensa' },
    { url: '/contacto' },
    { url: '/memorias' },
  ];

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
