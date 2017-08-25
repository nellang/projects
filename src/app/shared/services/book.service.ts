import {Injectable} from '@angular/core';
import {Book} from '../interfaces/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class BookService {

  constructor(private httpService: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>(environment.bookUrl);
  }

  getBookById(id: string) {
    return this.httpService.get<Book>(environment.bookUrl + '/' + id);
  }
}
