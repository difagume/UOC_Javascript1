export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    function Arbol(especie, fruta) {
      this.especie = especie;
      this.fruta = fruta;
    }

    const arbol = new Arbol(especie, fruta);
    return arbol;
  } else return null;
}
