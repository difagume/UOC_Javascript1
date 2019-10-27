export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    function Arbol(especie, fruta) {
      this.especie = especie;
      this.fruta = fruta;
    }

    Arbol.prototype.obtenerFruta = function() {
      return this.fruta;
    };

    return new Arbol(especie, fruta);
  } else return null;
}
