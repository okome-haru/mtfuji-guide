export default function sitemap() {
  const base = 'https://mtfuji-guide.com';
  const pages = ['', '/routes', '/rules', '/gear', '/when', '/access', '/tours'];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
