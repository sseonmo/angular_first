import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  books: IBook[];

  constructor(private http: HttpClient) {
    this.http.get<IBook[]>('assets/data/book.json').subscribe(res =>{
      console.log(res);
      this.books = res;
    });
  }

  ngOnInit() {
  }

}
