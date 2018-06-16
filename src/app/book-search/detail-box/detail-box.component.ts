import {Component, OnInit} from '@angular/core';
import {HttpSupportService} from "../../http-support.service";

interface IBook {
  bauthor: string;
  bdate: string;
  btranslator: string;
  bpublisher: string;
  btitle: string;
  bprice: number;
  bisbn: string;
  bimgurl: string;
}

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

  book: IBook = null;

  constructor(private httpSupportService: HttpSupportService) {
    this.httpSupportService.updateSelectBook.subscribe(data => this.book = data);
  }

  ngOnInit() {
  }

}
