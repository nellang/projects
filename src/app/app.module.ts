import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookService} from './shared/services/book.service';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {BookModule} from './book/book.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BookModule,
    routing
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
