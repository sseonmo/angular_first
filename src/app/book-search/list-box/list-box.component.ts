import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {HttpSupportService} from "../../http-support.service";
import {SelectionModel} from "@angular/cdk/collections";

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

  displayedHeaderColumns = ['isbn', '제목', '저자', '가격'];
  displayedColumns = ['bisbn', 'btitle', 'bauthor', 'bprice'];
  dataSource;
  books: IBook[];

  //event 처리
  selection = new SelectionModel<IBook>(false, []);

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


  rowSelect(rowValue: IBook): void {
    this.selection.select(rowValue);
    this.httpSupportService.updateSelectBook.next(this.selection.selected[0]);

  }

}
