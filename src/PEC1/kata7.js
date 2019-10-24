var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford

var marcaDelCoche = coche.obtenerMarca;

marcaDelCoche(); // undefined
