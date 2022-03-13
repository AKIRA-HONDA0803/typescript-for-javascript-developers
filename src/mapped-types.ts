export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

// 実質Partialと同じ
type Optional<T> = {
  [P in keyof T]?: T[P] | null
};

type OptionalProfile = Optional<Profile>;