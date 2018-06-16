import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

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
  book: IBook;

  updateBooks: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(this.books);
  updateSelectBook: BehaviorSubject<IBook> = new BehaviorSubject<IBook>(this.book);

  constructor(private http: HttpClient) { }

  getJsonData(url: string, name: string, category: string, keyword: string): void {

    console.log(category, keyword);

    this.http.get<IBook[]>(`${url}${name}`).subscribe(res => {

      let tmp: IBook[] = null;

      tmp = res.filter((item, idx, arr) => item.btitle.toUpperCase().includes(keyword.toUpperCase()) )
                .filter((item, idx, arr) => {
                  if (category === 'all') {
                    return true;
                  } else if (category === 'country' && item.btranslator === '') {
                    return true;
                  } else if (category === 'foreign' && item.btranslator !== '') {
                    return true;
                  }
                });

      // this.books = tmp;
      //  console.log(this.books);

      this.updateBooks.next(tmp);
    });

  }

  getBooks(): IBook[] {
    return this.books;
  }

  clearBooks(): void {
    this.updateBooks.next([]);
  }

}
