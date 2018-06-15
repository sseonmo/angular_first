import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword: string = '';

  /**/
  /* @Input() bookCategory:string;*/
  /* @Input('bookCategory') mySelected:string;  -- 변수명을 변경해서 사용하는 방식 */

  /*  setter를 이용한 방식 - 추가적인 작업이 필요할때 유용할거 같음*/
  _bookCategory: string = null;
  @Input()
  set bookCategory(value: string){

    if( value != null && Boolean( value) ) {
      // 추가적인 작업이 들어올 수 있습니다.
      this._bookCategory = 'category: ' +value;
    } else {
      this._bookCategory = value;
    }
  }

  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setKeyWord(keyword: string): void{
    this.keyword = keyword;

    this.searchEvent.emit({
      keyword: `${this.keyword}`,
      category: `${this._bookCategory.replace('category: ','')}`
    })
  }

  inputChange(): void{

  }

}
