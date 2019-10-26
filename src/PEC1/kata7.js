/**
 * Tengo 2 soluciones:
 *
 * 1. Para que la úlitma línea devuelva el valor de 'Ford' se debe declarar la variable marca y asignar el valor,
 * para luego llamar a la función marcaDelCoche(), ya que en este ámbito no existe la variable marca
 *
 */
var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford
var marcaDelCoche = coche.obtenerMarca;
var marca = 'Ford';
this.marcaDelCoche();

/*
 * 2. Para que la úlitma línea devuelva el valor de 'Ford' se debe colocar los parentesis al final de la asignación de
 * var marcaDelCoche = coche.obtenerMarca(), para que la variable marcaDelCoche ejecute la función y nos devuleva el log,
 * caso contario estamos asignando la función a la varible marcaDelCoche pero no la ejecutamos.
 */
var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford
var marcaDelCoche = coche.obtenerMarca();
marcaDelCoche;
