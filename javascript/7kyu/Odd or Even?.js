function oddOrEven(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum % 2 === 0 ? "even" : "odd";
}