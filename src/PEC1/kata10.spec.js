import plantarArbol from './kata10';

describe('Kata #10: prototipo', () => {
  test('arbol tiene el método obtenerEspecie que devuelve un string que tiene el método presentarArbol', () => {
    const arbol = plantarArbol('peral', 'pera');
    const arbolEspecie = arbol.obtenerEspecie;

    expect(arbolEspecie).toHaveProperty('presentarArbol');
  });

  test(`Al ejecutar presentarArbol se presentar por consola 'Este árbol es un 'nuestro_arbol', siendo
  'nuestro_arbol' el string sobre el que se ejecuta el método presentarArbol`, () => {
    const especie = 'naranjo';
    const arbol = plantarArbol(especie, 'naranja');
    const arbolEspecie = arbol.obtenerEspecie;
    const res = arbolEspecie.presentarArbol();

    expect(res).toBe(`Este árbol es un ${especie}`);
  });

  test(`Al ejecutar presentarArbol con un parámetro de tipo string se presentar por consola
  'Este árbol es un 'nuestro_arbol' y da 'nuestra_fruta}', siendo nuestra_frutal el string
  que hemos pasado al método`, () => {
    const especie = 'cerezo';
    const fruta = 'cereza';
    const arbol = plantarArbol(especie, 'manzana');
    const arbolEspecie = arbol.obtenerEspecie;
    const res = arbolEspecie.presentarArbol(fruta);

    expect(res).toBe(`Este árbol es un ${especie} y da ${fruta}`);
  });
});
