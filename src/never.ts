export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result })
} catch (error) {
  console.log({ error })
}

// 呼び元に返ってこないような関数の戻り値に対応するアノテーションはneverを書く
let foo: void = undefined;

// never型に値は代入できない
// let bar: never = undefined;

// never型を返す関数はnever型の変数に代入できるが利用シーンがない
let bar: never = error('only me');
