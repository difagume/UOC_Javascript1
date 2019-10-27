import plantarArbol from './kata9.1';

describe('Kata #9.1: factoría_de_objetos', () => {
  test(`si no recibe dos parámetros string de tipo string devuelve null`, () => {
    expect(plantarArbol(1, 2)).toBeNull();
    expect(plantarArbol(true, 'pera')).toBeNull();
    expect(plantarArbol('peral', new Date())).toBeNull();
    expect(plantarArbol(null, 3.6)).toBeNull();
  });

  test(`al llamar la función con los parámetros 'peral' y 'pera' devuelve el objeto { especie: 'peral', fruta: 'pera' }`, () => {
    const arbol = plantarArbol('peral', 'pera');
    expect(arbol).toEqual({ especie: 'peral', fruta: 'pera' });
  });
});
