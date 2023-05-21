function sum(...num) {
  return num.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));
