import { Component, OnInit } from '@angular/core';

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

}
