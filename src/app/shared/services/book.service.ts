import {Injectable} from '@angular/core';
import {Book} from '../interfaces/book';

@Injectable()
export class BookService {

  constructor() {
  }

  getBooks(): Book[] {
    return [
      {id: '1', isbn: '123456', title: 'Angular2 Training'},
      {id: '2', isbn: '234567', title: 'Schulung', author: 'Adesso'},
      {id: '3', isbn: '345678', title: 'Dortmund'}
    ];
  }

}
