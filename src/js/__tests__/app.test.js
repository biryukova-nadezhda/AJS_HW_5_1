import yearsCount from '../app.js';

const datalist = [
  ['Nadezhda', 1996, 26],
  ['Valeria', 1997, 25],
];

const handler = test.each(datalist);

handler('calculate years for %s years %i', (_, year, expected) => {
  const result = yearsCount(year);
  expect(result).toBe(expected);
});
