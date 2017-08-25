import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
