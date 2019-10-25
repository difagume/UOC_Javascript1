var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford
var marcaDelCoche = coche.obtenerMarca;
//var marca = 'Ford externo';
marcaDelCoche(); // undefined

/**
 * Para que la úlitma línea devuelva el valor de 'Ford' se debe declarar la variable marca y asignar el valor,
 * para luego llamar a la función marcaDelCoche(), ya que en este ámbito no existe la variable marca
 */
