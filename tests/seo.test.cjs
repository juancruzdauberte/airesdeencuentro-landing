const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

function load(path) {
  const source = fs.readFileSync(path, 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', code)(require, module, module.exports);
  return module.exports;
}

const origin = 'https://airesdeencuentrobaradero.net';

test('local SEO uses the official canonical and matching social metadata', () => {
  const { siteMetadata: metadata, lodgingSchema } = load('lib/seo.ts');
  assert.equal(metadata.metadataBase.href, `${origin}/`);
  assert.equal(metadata.alternates.canonical, '/');
  assert.match(metadata.title, /Baradero/);
  assert.match(metadata.description, /Baradero/);
  assert.equal(metadata.openGraph.locale, 'es_AR');
  assert.equal(metadata.openGraph.url, '/');
  assert.equal(metadata.openGraph.title, metadata.title);
  assert.equal(metadata.twitter.card, 'summary_large_image');
  assert.equal(metadata.twitter.images[0], metadata.openGraph.images[0].url);
  assert.ok(fs.existsSync(`public${metadata.openGraph.images[0].url}`));
  assert.equal(metadata.robots.index, true);
  assert.equal(metadata.robots.follow, true);
  assert.equal(lodgingSchema['@type'], 'LodgingBusiness');
  assert.equal(lodgingSchema.url, `${origin}/`);
  assert.equal(lodgingSchema.address.addressLocality, 'Baradero');
  assert.equal(lodgingSchema.address.streetAddress, 'Che Guevara 711');
  assert.equal(lodgingSchema.address.addressCountry, 'AR');
  assert.equal(lodgingSchema.aggregateRating, undefined);
  assert.match(fs.readFileSync('app/layout.tsx', 'utf8'), /metadata.*=.*siteMetadata/);
  assert.match(fs.readFileSync('app/page.tsx', 'utf8'), /application\/ld\+json/);
});

test('SEO includes requested booking and outdoor search phrases', () => {
  const { siteMetadata: metadata, lodgingSchema } = load('lib/seo.ts');
  for (const phrase of ['reservas', 'reservas en baradero', 'casas en baradero', 'casa al aire libre']) {
    assert.ok(metadata.keywords?.includes(phrase), `Missing keyword: ${phrase}`);
  }
  assert.match(metadata.description, /reservas en Baradero/i);
  assert.match(metadata.description, /aire libre/i);
  assert.equal(metadata.openGraph.description, metadata.description);
  assert.equal(metadata.twitter.description, metadata.description);
  assert.equal(lodgingSchema.description, metadata.description);
});

test('robots allows crawling and points at the canonical sitemap', () => {
  assert.deepEqual(load('app/robots.ts').default(), {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${origin}/sitemap.xml`,
  });
});

test('sitemap lists only the public canonical homepage without invented dates', () => {
  assert.deepEqual(load('app/sitemap.ts').default(), [{ url: `${origin}/` }]);
});
