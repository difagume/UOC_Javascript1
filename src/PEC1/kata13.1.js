export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    let f;
    let e;

    class Arbol {
      constructor(especie, fruta) {
        e = especie;
        f = fruta;
      }

      get obtenerFruta() {
        return f;
      }

      get obtenerEspecie() {
        return e;
      }

      set definirFruta(val) {
        if (typeof val === 'string') f = val;
      }

      set definirEspecie(val) {
        if (typeof val === 'string') e = val;
      }
    }

    class EspecieArbol extends Arbol {
      set definirEspecieArbol(val) {
        super.definirEspecie = val;
      }
    }

    return new EspecieArbol(especie, fruta);
  } else return null;
}
