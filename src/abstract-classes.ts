export {};

// cryメソッドの抽象化
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}


class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}