export default function plantarArbol(val_especie, val_fruta) {
  if (typeof val_especie === 'string' && typeof val_fruta === 'string') {
    var arbol = {
      especie: val_especie,
      fruta: val_fruta
    };

    return arbol;
  } else return null;
}
