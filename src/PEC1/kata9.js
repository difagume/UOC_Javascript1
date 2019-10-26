function Arbol(especie, fruta) {
  this.especie = especie;
  this.fruta = fruta;
}

export default function plantarArbol(especie, fruta) {
  if (typeof especie === 'string' && typeof fruta === 'string') {
    Object.create(Arbol);
    return new Arbol(especie, fruta);
  } else return null;
}
