export default function plantarArbol(especie, fruta) {
  var arbol = {
    get obtenerEspecie() {
      return especie;
    },
    get obtenerFruta() {
      return fruta;
    }
  };

  return arbol;
}
