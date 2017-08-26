import {Component, OnInit} from '@angular/core';
import {BookService} from '../../shared/services/book.service';
import {Book} from '../../shared/interfaces/book';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: Observable<Book[]>;


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
