export {};

class VisaCard {
  // readonly owner: string; 不要
  // readonlyを着脱するために、publicを置いておく
  constructor(public readonly owner: string) {
    // this.owner = owner; 不要
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'ベーコン'; error