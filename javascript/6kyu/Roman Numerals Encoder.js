function solution(x){
    const base = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const sym = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

  let res = "";
  let i = base.length - 1;
  while (x > 0) {
      let div = Math.floor(x / base[i]);
      while (div) {
          res += sym[i];
          div--;
      }
      
      x %= base[i];
      i--;
  }

  return res;
}