import eliminar_primer_y_ultimo from './kata4';

describe('Kata #4: elimina_primer_y_ultimo', () => {
  test(`de 'JavaScript' es 'avaScrip'`, () => {
    expect(eliminar_primer_y_ultimo('JavaScript')).toBe('avaScrip');
  });

  test(`de 'Alejandría' es 'lejandrí'`, () => {
    expect(eliminar_primer_y_ultimo('Alejandría')).toBe('lejandrí');
  });

  test(`de 'hidrógeno' es 'idrógen'`, () => {
    expect(eliminar_primer_y_ultimo('hidrógeno')).toBe('idrógen');
  });

  test(`de 'ok' es 'ok'`, () => {
    expect(eliminar_primer_y_ultimo('ok')).toBe('ok');
  });
});
