import plantarArbol from './kata13.1';

describe('Kata #13 de kata #9.4: setter para objetos', () => {
  test('El objeto devuelto incluye cuatro propiedades: obtenerEspecie, definirEspecie y obtenerFruta y definirFruta', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerEspecie');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirEspecie');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerFruta');
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirFruta');
  });

  test('Al crear un arbol e invocar posteriormente definirFruta con el valor 12 el objeto arbol mantiene su valor previo', () => {
    const arbol = plantarArbol('peral', 'pera');
    arbol.definirFruta = 12;

    expect(arbol.obtenerFruta).toBe('pera');
  });

  test('Al crear un arbol e invocar posteriormente definirFruta con el valor manzana el objeto arbol tiene manzana como valor la propiedad fruta', () => {
    const arbol = plantarArbol('manzano', 'manzana');
    arbol.definirFruta = 'manzana';

    expect(arbol.obtenerFruta).toBe('manzana');
  });

  test('Hacer el equivalente del superior para definirEspecie', () => {
    const especieArbol = plantarArbol('cerezo', 'cereza');
    especieArbol.definirEspecieArbol = 'manzano';

    expect(especieArbol.obtenerEspecie).toBe('manzano');
  });
});
