function rot13(str) {
  let arr = str.split('');
  return arr.map(shift).join("");
  function shift(char) {
    if (char.match(/\W/i)) {
      return char;
    } else if (char.charCodeAt(0) <= 77) {
      return String.fromCharCode(char.charCodeAt(0) + 13);
      } else {
      return String.fromCharCode(char.charCodeAt(0) - 13);
      }
  }
}
