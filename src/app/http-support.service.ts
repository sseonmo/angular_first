import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface IBook{
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string
}



@Injectable({
  providedIn: 'root'
})
export class HttpSupportService {

  books: IBook[];

  constructor(private http: HttpClient) { }

  getJsonData(url: string, name: string, category: string, keyword: string): void {

    console.log(category, keyword);

    this.http.get<IBook[]>(`${url}${name}`).subscribe(res => {

      let tmp: IBook[] = null;

      tmp = res.filter((item, idx, arr) => item.btitle.includes(keyword))
                .filter((item, idx, arr) => {
                  if (category === 'all') {
                    return true;
                  } else if (category === 'country' && item.btranslator === '') {
                    return true;
                  } else if (category === 'foreign' && item.btranslator !== '') {
                    return true;
                  }
                });

      this.books = tmp;
       console.log(this.books);
    });

  }

  getBooks(): IBook[] {
    return this.books;
  }

}
