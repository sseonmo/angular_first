import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {BookSearchMainComponent} from "../book-search/book-search-main/book-search-main.component";
import {MovieSearchMainComponent} from "../movie-search/movie-search-main/movie-search-main.component";


// Router 생성( path 표시할 때 Root path에 대한 '/'는 제외 )
const routers: Routes = [
  { path: ''      , component: HomeComponent},
  { path: 'book'  , component: BookSearchMainComponent},
  { path: 'movie' , component: MovieSearchMainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
