export {};

// 引数の初期化にアクセス修飾詞をつける→出力が可能(初期化処理が行われる)
class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('はむさん', 43);
console.log(me);