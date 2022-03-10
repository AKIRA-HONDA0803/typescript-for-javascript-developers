export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
  ): number => {
    const bmi: number = weight / (height * height);
    if (printable) {
      console.log('bmi');
    }
    return weight / (height * height);
  };

  bmi(1.78, 86, true);

  // bmi(身長, 体重, console.logで出力するかどうか?)
  // bmi(1.78, 86, true); 出力する
  // bmi(1.78, 86, false); 出力されない
  // bmi(1.78, 86); 出力されない