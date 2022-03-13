export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 型の変更や削除に対して追従するのが難しい
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

type PartialType = Partial<Profile>;

type RequiredType = Required<Profile>;