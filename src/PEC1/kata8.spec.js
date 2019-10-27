import obtenerFruta, { arbol } from './kata8';

describe('Kata #8: objeto arbol', () => {
  test(`debe tener propiedad 'especie' y 'fruta'`, () => {
    expect(arbol).toHaveProperty('especie');
    expect(arbol).toHaveProperty('fruta');
  });

  test(`valor de propiedad 'especie' debe ser 'manzano'`, () => {
    expect(arbol).toHaveProperty('especie', 'manzano');
  });

  test(`valor de propiedad 'fruta' debe ser 'manzana'`, () => {
    expect(arbol).toHaveProperty('fruta', 'manzana');
  });

  test(`existe método 'obtenerFruta'`, () => {
    expect(arbol).toHaveProperty('obtenerFruta');
  });

  test(`resultado de invocar 'obtenerFruta' debe ser 'manzana'`, () => {
    expect(arbol.obtenerFruta()).toBe('manzana');
  });

  /* kata 8.2 */
  test(`elemento recibido tiene propiedad 'fruta'`, () => {
    expect({ fruta: '' }).toHaveProperty('fruta');
  });

  test(`si elemento recibido tiene propiedad 'fruta' devuelve valor del objeto 'arbol.fruta',
  en otro caso devuelve 'No fruta'`, () => {
    expect(obtenerFruta({ fruta: 'pera' })).toBe('manzana');
    expect(obtenerFruta({ camion: 'transporte' })).toBe('No fruta');
  });
});
