function add(a, b) {
  return a + b;
}

const myArray = [1, 2, 3, 4, "5", 6];

for (const element of myArray) {
  const y = add(element, 1);

  console.log(y);
}
