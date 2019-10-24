export default function repiteString(str, num) {
  let repite = '';

  while (num) {
    repite = repite.concat(str);
    num--;
  }
  return repite;
}
