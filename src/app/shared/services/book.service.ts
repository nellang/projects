import {Injectable} from '@angular/core';
import {Book} from '../interfaces/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BookService {

  private books: Book[] = [
    {id: '1', isbn: '123456', title: 'Angular2 Training'},
    {id: '2', isbn: '234567', title: 'Schulung', author: 'Adesso'},
    {id: '3', isbn: '345678', title: 'Dortmund'}
  ];

  constructor() {
  }

  getBooks(): Observable<Book[]> {
    return Observable.of(this.books);
  }

}
