import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../shared/services/book.service';
import {Book} from '../shared/interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public currentBook: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.bookService.getBookById(param.id).subscribe(book => {
        this.currentBook = book;
      });
    });
  }

}
