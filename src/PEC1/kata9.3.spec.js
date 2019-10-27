import plantarArbol from './kata9.3';

describe('Kata #9.3: getter para objetos', () => {
  test(`'El objeto devuelto incluye dos propiedades: 'obtenerEspecie' y 'obtenerFruta'`, () => {
    expect(plantarArbol()).toHaveProperty('obtenerEspecie');
    expect(plantarArbol()).toHaveProperty('obtenerFruta');
  });

  test(`Al invocar el método 'obtenerEspecie' nos devuelve el valor 'peral'`, () => {
    expect(plantarArbol('peral', 'pera').obtenerEspecie).toBe('peral');
  });

  test(`Al invocar el método 'obtenerFruta' nos devuelve el valor 'pera'`, () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta).toBe('pera');
  });
});
