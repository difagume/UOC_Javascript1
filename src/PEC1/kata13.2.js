export default function plantarArbol(especie, fruta) {
  let f;
  let e;

  String.prototype.presentarArbol = function(fruta) {
    if (fruta === undefined) {
      console.log(`Este árbol es un ${e}`);
      return `Este árbol es un ${e}`;
    } else {
      console.log(`Este árbol es un ${e} y da ${fruta}`);
      return `Este árbol es un ${e} y da ${fruta}`;
    }
  };

  if (typeof especie === 'string' && typeof fruta === 'string') {
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
        if (typeof val === 'string') {
          f = val;
        } else {
          throw new Error();
        }
      }

      set definirEspecie(val) {
        if (typeof val === 'string') e = val;
      }
    }

    return new Arbol(especie, fruta);
  } else return null;
}
