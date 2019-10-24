import eliminar_los_espacios from './kata5';

describe('Kata #5: eliminar_los_espacios', () => {
  test(`de 'buenos días' es 'buenosdías'`, () => {
    expect(eliminar_los_espacios('buenos días')).toBe('buenosdías');
  });

  test(`de '   pastel      de     zanahoria   ' es 'pasteldezanahoria'`, () => {
    expect(eliminar_los_espacios('   pastel      de     zanahoria   ')).toBe('pasteldezanahoria');
  });

  test(`de 'dábale arroz a la zorra el abad' es 'dábalearrozalazorraelabad'`, () => {
    expect(eliminar_los_espacios('dábale arroz a la zorra el abad')).toBe(
      'dábalearrozalazorraelabad'
    );
  });
});
