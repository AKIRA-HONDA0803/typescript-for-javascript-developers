export {};

class Person {
  // publicは書かないのが普通
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    // ageはPersonのみでアクセス
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');

// privateのageを参照できる
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age); アクセス修飾詞がprivateのためerror
// let hanako = new Person();
