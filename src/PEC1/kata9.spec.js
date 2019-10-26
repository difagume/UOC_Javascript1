import plantarArbol from './kata9';

describe('Kata #9: factoría_de_objetos', () => {
  /* kata 9.1 */
  test(`si no recibe dos parámetros string de tipo string devuelve null`, () => {
    expect(plantarArbol(1, 2)).toBeNull();
    expect(plantarArbol(true, 'pera')).toBeNull();
    expect(plantarArbol('peral', new Date())).toBeNull();
    expect(plantarArbol(null, 3.6)).toBeNull();
  });

  test(`al llamar la función con los parámetros 'peral' y 'pera' devuelve el objeto { especie: 'peral', fruta: 'pera' }`, () => {
    expect(plantarArbol('peral', 'pera')).toEqual({ especie: 'peral', fruta: 'pera' });
  });

  /* kata 9.2 */
  test(`el objeto devuelto incluye tres propiedades: 'especie', 'fruta' y 'obtenerFruta`, () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('especie');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('fruta');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerFruta');
  });

  test(`al invocar el método 'obtenerFruta' devuelve el valor 'pera'`, () => {
    expect(plantarArbol('peral', 'pera').obtenerFruta()).toBe('pera');
  });
});
