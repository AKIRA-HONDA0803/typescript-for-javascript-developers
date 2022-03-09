import axios from 'axios';
export {};
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    // 型がanyの状況は望ましくない
    // let data: any;
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[];
    // 上記でより正確な制約を行う let data: any;では例えばtitleが欠損していた時には検知されない
    // let data: object[];
    data = response.data;
    // data = [
    //   {
    //     id: 1,
    //     title: 'title',
    //     description: 'description'
    //   }
    // ]
    console.log(data);
  });