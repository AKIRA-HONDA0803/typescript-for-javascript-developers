export {};

function double(value: number): number;
function double(value: string): string;


function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else
    return value + value;
  // 型制約が担保されているため、記述不要
  // } else {
  //   throw 'numberでもstringでもないので、引数の型を確認してください。'
  // }
}

// function double(value: number): number {
//   return value * 2;
// }

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); error