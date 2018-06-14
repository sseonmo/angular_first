import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookSearchMainComponent} from "./book-search-main/book-search-main.component";
import { SearchBoxComponent } from './search-box/search-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { ListBoxComponent } from './list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

//FormsModule - 양방향 바인딩을 위한 FormsModule import
//COMPOSITION_BUFFER_MODE - 한글은 조합형 문자이기 때문에 글자가 다 만들어 지기 전까지는 해당 이벤트가 발생하지 않게 해줌
import {COMPOSITION_BUFFER_MODE, FormsModule} from "@angular/forms";

import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false

    }
  ],
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent]
})
export class BookSearchModule { }

