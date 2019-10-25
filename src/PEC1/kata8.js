export let arbol = {
  especie: 'manzano',
  fruta: 'manzana',
  obtenerFruta: function() {
    return this.fruta;
  }
};

export default function obtenerFruta(obj) {
  if (obj.fruta) {
    return arbol.obtenerFruta();
  } else return 'No fruta';
}
