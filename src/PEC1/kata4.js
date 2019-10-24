export default function eliminar_primer_y_ultimo(str) {
  if (str.length > 2) return str.slice(1, str.length - 1);
  else return str;
}
