export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// 代入ができる = any型はstring型と互換性がある
fooCompatible = barCompatible;

// any型はstring型のデータを代入するとstring型になる
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性がないため、エラーになる
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;


interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');