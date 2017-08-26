import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ConfirmDeactivateGuard} from '../shared/guards/confirm-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    children: [{path: 'books/:id', component: BookDetailComponent, canDeactivate: [ConfirmDeactivateGuard]}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
