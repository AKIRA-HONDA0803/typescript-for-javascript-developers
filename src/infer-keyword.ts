export {};

function add(a: number, b: number) {
  return a + b;
};

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// inferは条件を記載するところに書くことができる
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;