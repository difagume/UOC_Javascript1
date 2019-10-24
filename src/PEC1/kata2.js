export default function suma_de_elementos_positivos(num) {
  let suma = 0;

  num.map(n => {
    if (n > 0) suma = suma + n;
  });

  return suma;
}
