export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// Hamtaroで再代入ができない
// nickname = 'Hamtaro';
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// readonlyプロパティのため再代入できない
// profile.name = 'Ham';
// profile.height = 180;