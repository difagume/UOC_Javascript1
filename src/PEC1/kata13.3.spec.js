import plantarArbol from './kata13.3';

describe('Kata #12: expresiones regulares', () => {
  test(`Al crear un arbol con los valores manzano y manzana e invocar posteriormente
  definirFruta con el valor pera el método lanza un error y mantiene su valor previo`, () => {
    const arbol = plantarArbol('manzano', 'manzana');
    expect(() => {
      arbol.definirFruta = 'pera';
    }).toThrow();
    expect(arbol.obtenerFruta).toBe('manzana');
  });

  test(`Al crear un arbol con los valores peral y manzana e invocar posteriormente
  definirFruta con el valor pera el método modifica el valor de la propiedad fruta`, () => {
    const arbol = plantarArbol('peral', 'manzana');
    arbol.definirFruta = 'pera';
    expect(arbol.obtenerFruta).toBe('pera');
  });
});
