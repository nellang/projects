import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../shared/services/book.service';
import {Book} from '../../shared/interfaces/book';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  public books: Book[];

  private bookSubscription: Subscription;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookSubscription = this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
