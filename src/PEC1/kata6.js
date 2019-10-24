function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

/**
 * Se declara la función test, la cual está imprimiendo a consola el valor de a y la función foo()
 *
 * Cuando se hace la llamada a la función test(), imprime el valor de la variable a que es 'undefined'
 * ya que se imprime su valor antes de su declaración y asignación,
 *
 * Al imprimir a consola la función foo() hace la llamada a la función foo(), nos imprime el valor de 2
 * que es el valor que está retornando la función foo(),
 *
 * y por último se declara la variable a y se le asigna el valor de 1
 *
 */
