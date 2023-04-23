function add(a: number, b: number) {
  return a + b;
}

// function isNumber(x: unknown): x is number {
//   return typeof x === "number";
// }

const isNumber = (x: unknown): x is number => typeof x === "number";

const myArray = [1, 2, 3, 4, "5", 6];

for (const element of myArray) {
  if (isNumber(element)) {
    const y = add(element, 1);
    console.log(y);
  }
}
