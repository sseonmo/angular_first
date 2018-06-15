import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {HttpSupportService} from "../../http-support.service";

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

  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpSupportService: HttpSupportService) {
    /* Service 로 변경
    this.http.get<IBook[]>('assets/data/book.json').subscribe(res =>{
      this.books = res;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
    });
    */

    this.httpSupportService.updateBooks.subscribe( data => {
      this.books = data;
      this.dataSource = new MatTableDataSource<IBook>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit() {
  }

/*  Rxjs 이용으로 인해 주석처리됨.
  getData(): void {
    this.books = this.httpSupportService.getBooks();
    this.dataSource = new MatTableDataSource<IBook>(this.books);
    this.dataSource.paginator = this.paginator;
  }*/

}
