import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SearchBoxComponent} from "../search-box/search-box.component";

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {

  constructor() { }

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

  clearCondition(): void {
    this.selectedValue = null;
    this.searchTitle = null;

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

  }

  changeDom(): void {

  }

}
