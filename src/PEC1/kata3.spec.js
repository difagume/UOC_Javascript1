import repiteString from './kata3';

describe('Kata #3: repiteString', () => {
  test(`de ('JavaScript', 0) es ''`, () => {
    expect(repiteString('JavaScript', 0)).toBe('');
  });

  test(`de ('miau', 1) es 'miau'`, () => {
    expect(repiteString('miau', 1)).toBe('miau');
  });

  test(`de ('hola', 3) es 'holaholahola'`, () => {
    expect(repiteString('hola', 3)).toBe('holaholahola');
  });

  test(`de ('?', 10) es '??????????'`, () => {
    expect(repiteString('?', 10)).toBe('??????????');
  });
});
