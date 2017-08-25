import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BookListComponent},
  {path: 'books/:id', component: BookDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
