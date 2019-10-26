export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    function Arbol(especie, fruta) {
      this.especie = especie;
      this.fruta = fruta;
    }
    return new Arbol(especie, fruta);
  } else return null;
}
