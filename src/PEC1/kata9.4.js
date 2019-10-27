export default function plantarArbol(especie, fruta) {
  let f = '';
  let e = '';

  if (typeof especie === 'string' && typeof fruta === 'string') {
    e = especie;
    f = fruta;

    var arbol = {
      get obtenerFruta() {
        return f;
      },

      get obtenerEspecie() {
        return e;
      },

      set definirFruta(val) {
        if (typeof val === 'string') f = val;
      },

      set definirEspecie(val) {
        if (typeof val === 'string') e = val;
      }
    };

    return arbol;
  } else return null;
}
