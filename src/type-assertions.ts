export {};

let name: any = 'Ham';

// 型アサーション
// let length = name.length as string;
// let length = (name as string).length;
let length = (<string>name).length;

// length = 'foo';