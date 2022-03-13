export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// 選択
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// 除外
type SmallProfile = Omit<DetailedProfile, 'height'>;

// omitの定義
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MySmallProfile = MyOmit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;

// SimpleProfile = MyOmit = MySmallProfile