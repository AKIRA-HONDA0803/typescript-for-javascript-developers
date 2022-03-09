export {};

// nullを代入しても型推論はany
let absence: null = null;
// absence = 'hello'; error

// undefinedを代入しても型推論はany
let data: undefined = undefined;
// data = 123; error