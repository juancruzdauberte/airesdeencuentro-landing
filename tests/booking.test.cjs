const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
require.extensions['.tsx'] = (module, filename) => {
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  });
  module._compile(output.outputText, filename);
};
const BookingBar = require('../components/BookingBar.tsx').default;
for (const compact of [false, true]) {
  test(`booking requires all fields before submitting (compact=${compact})`, () => {
    const html = renderToStaticMarkup(React.createElement(BookingBar, { compact }));
    assert.match(html, /<form/);
    assert.equal((html.match(/required=""/g) || []).length, 3);
    assert.match(html, /<option value="" selected="">/);
    assert.match(html, /type="submit"/);
    assert.doesNotMatch(html, /href="https:\/\/wa.me/);
    assert.match(html, /Completá la fecha de check-in, la fecha de check-out y la cantidad de huéspedes/);
    assert.match(html, /Fecha de llegada/);
    assert.match(html, /Fecha de salida/);
  });
}
test('section consultation links route through the required form', () => {
  for (const path of ['components/Footer.tsx', 'components/sections/ContactSection.tsx']) {
    const source = fs.readFileSync(path, 'utf8');
    assert.doesNotMatch(source, /https:\/\/wa.me|href="mailto:/);
    assert.match(source, /href="#disponibilidad"/);
  }
});
