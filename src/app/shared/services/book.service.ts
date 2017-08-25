import {Injectable} from '@angular/core';
import {Book} from '../interfaces/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(private httpService: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>('http://localhost:3000/books');
  }

}
