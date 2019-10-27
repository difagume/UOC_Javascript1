import plantarArbol from './kata9.2';

describe('Kata #9: factoría_de_objetos', () => {
  test(`el objeto devuelto incluye tres propiedades: 'especie', 'fruta' y 'obtenerFruta`, () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('especie');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('fruta');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerFruta');
  });

  test(`al invocar el método 'obtenerFruta' devuelve el valor 'pera'`, () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
});
