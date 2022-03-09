export {};

// データが上書きされてもエラーが発生しない
let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

let profile2: {
  name: string;
} = { name: 'Ham'};
// profile2 = { birthYear: 1976}; error
profile2 = { name: 'Nimo' };