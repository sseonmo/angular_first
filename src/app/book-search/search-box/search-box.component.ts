import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpSupportService} from "../../http-support.service";
import {JSON_DATA_CONFIG, JsonConfig} from "../../json-config";


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers:[
    {
      provide: JsonConfig,
      useValue: JSON_DATA_CONFIG
    }
  ]
})
export class SearchBoxComponent implements OnInit {

  keyword: string = '';

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

  @Input('selectedValue') selectedValue: string;

  @Output() searchEvent = new EventEmitter();

  constructor(private httpSupportService: HttpSupportService, private jsonConfig: JsonConfig) { }

  ngOnInit() {
  }

  setKeyWord(keyword: string): void{
    this.keyword = keyword;

    if(!Boolean(this._bookCategory)){
      alert('도서종류를 선택해주세요!');
      return;
    }

    this.searchEvent.emit({
      keyword: `${this.keyword}`,
      category: `${this._bookCategory.replace('category: ','')}`
    });

    this.httpSupportService.getJsonData(
      this.jsonConfig.url,
      this.jsonConfig.name,
      this.selectedValue,
      this.keyword
    );

  }

  inputChange(): void{

  }

}
