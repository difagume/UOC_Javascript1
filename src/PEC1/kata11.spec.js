import plantarArbol from './kata10';

describe('Kata #11: gestión de errores', () => {
  test(`Al crear un arbol e invocar posteriormente definirFruta con
  el valor 12 el método lanza un error y mantiene su valor previo`, () => {
    const arbol = plantarArbol('cerezo', 'cereza');
    expect(() => {
      arbol.definirFruta = 12;
    }).toThrow();
    expect(arbol.obtenerFruta).toBe('cereza');
  });
});
