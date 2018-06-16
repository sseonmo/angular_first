import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SearchBoxComponent} from "../search-box/search-box.component";
import {HttpSupportService} from "../../http-support.service";
import {ListBoxComponent} from "../list-box/list-box.component";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {

  constructor(private httpSupportService: HttpSupportService) { }

  selectedValue = null;

  bookCategory = [
    {value: 'all', viewValue: '국내외도서'},
    {value: 'country', viewValue: '국내도서'},
    {value: 'foreign', viewValue: '국외도서'}
  ];

  displayCategoryName: string = "";
  searchTitle: string = "";

  ngOnInit() {
  }

  changeValue(category: string): void {


    const fiterBookCategory = this.bookCategory.filter(book => book.value === category);

    this.displayCategoryName = fiterBookCategory[0].viewValue;
  }

  changeTitleBar(searchInfo): void {
    this.searchTitle = `${searchInfo.keyword} ( ${searchInfo.category} ) `;
  }

  @ViewChild(SearchBoxComponent) searchComp: SearchBoxComponent;
  @ViewChildren(SearchBoxComponent) searchCompArr: QueryList<SearchBoxComponent>;
  @ViewChild(ListBoxComponent) listBoxComp: ListBoxComponent;

  clearCondition(): void {
    this.selectedValue = null;
    this.searchTitle = null;
    this.displayCategoryName = null;

    /* @ViewChild 를 사용할 경우
    console.log(this.searchComp._bookCategory);
    console.log(this.searchComp.keyword);
    this.searchComp._bookCategory = null;
    this.searchComp.keyword = null;
    */

    /* @ViewChildren(Array Type)을 사용할 경우
    console.log(toString.call(this.searchCompArr.toArray()));
    */
    this.searchCompArr.toArray()[0].keyword = null;
    this.searchCompArr.toArray()[0]._bookCategory = null;

    //listComponent 초기화
    this.httpSupportService.clearBooks();

  }

  @ViewChild('resultStatus') resultToolbar: ElementRef;
  changeDOM(): void {

    this.resultToolbar.nativeElement.onclick = function () {
      alert('DOM을 직접 제어할 수 있어요!!');
    };
    this.resultToolbar.nativeElement.innerHTML = "클릭해보세요";
  }

}
