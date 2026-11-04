const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? files(filename) : /\.(tsx?|html)$/.test(filename) ? [filename] : [];
  });
}

test('current website copy and reference HTML use the new business name', () => {
  const surfaces = [...files('app'), ...files('components'), ...files('lib'), 'index.html'];
  for (const filename of surfaces) {
    assert.doesNotMatch(fs.readFileSync(filename, 'utf8'), /El Encuentro/, filename);
  }
  for (const filename of ['components/Header.tsx', 'components/Footer.tsx', 'components/BookingBar.tsx', 'components/sections/HeroSection.tsx', 'components/sections/GallerySection.tsx', 'components/sections/AmenitiesSection.tsx', 'components/sections/LocationSection.tsx', 'components/sections/FAQSection.tsx', 'index.html']) {
    assert.match(fs.readFileSync(filename, 'utf8'), /Aires de Encuentro/, filename);
  }
});

test('SEO and structured data identify Aires de Encuentro with the official domain and email', () => {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync('lib/seo.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function('require', 'module', 'exports', code)(require, module, module.exports);
  const { siteMetadata: metadata, lodgingSchema } = module.exports;
  assert.equal(lodgingSchema.name, 'Aires de Encuentro');
  assert.equal(metadata.openGraph.siteName, 'Aires de Encuentro Baradero');
  for (const value of [metadata.title, metadata.description, metadata.openGraph.title, metadata.openGraph.description, metadata.openGraph.images[0].alt, metadata.twitter.title, metadata.twitter.description, lodgingSchema.description]) {
    assert.match(value, /Aires de Encuentro/);
    assert.doesNotMatch(value, /El Encuentro/);
  }
  assert.equal(metadata.metadataBase.href, 'https://airesdeencuentrobaradero.net/');
  assert.match(fs.readFileSync('components/Footer.tsx', 'utf8'), /airesdeencuentrobaradero@gmail\.com/);
});

 test('contact email is consistent in the website, reference and configuration example', () => {
  for (const filename of ['components/Footer.tsx', 'index.html', 'ARCHITECTURE.md']) {
    const source = fs.readFileSync(filename, 'utf8');
    assert.ok(source.includes('airesdeencuentrobaradero@gmail.com'), filename);
    assert.ok(!source.includes('reservas@elencuentro.com'), filename);
  }
});
