import suma_de_elementos_positivos from './kata2';

describe('Kata #2: suma_de_elementos_positivos', () => {
  test('de [] es 0', () => {
    expect(suma_de_elementos_positivos([])).toBe(0);
  });

  test('de [1, 2, 3, 4, 5] es 15', () => {
    expect(suma_de_elementos_positivos([1, 2, 3, 4, 5])).toBe(15);
  });

  test('de [1, -2, 3, 4, 5] es 13', () => {
    expect(suma_de_elementos_positivos([1, -2, 3, 4, 5])).toBe(13);
  });

  test('de [-1, 2, 3, 4, -5] es 9', () => {
    expect(suma_de_elementos_positivos([-1, 2, 3, 4, -5])).toBe(9);
  });

  test('de [-1, -2, -3, -4, -5] es 0', () => {
    expect(suma_de_elementos_positivos([-1, -2, -3, -4, -5])).toBe(0);
  });
});
