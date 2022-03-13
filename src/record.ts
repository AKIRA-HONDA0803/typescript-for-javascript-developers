export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// 共通の型を持つデータ
// Covid19InfectionInfoを記載すればアノテーションは可能だが記述が重複
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: true },
// };

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 },
};