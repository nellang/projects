import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookService} from './shared/services/book.service';
import {BookListComponent} from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
