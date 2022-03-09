export {};


//関数からのreturn値がないことを期待する型: void
function returnNothing(): void {
  console.log("I don't return anything!");
  // return undefined;
}

console.log(returnNothing());