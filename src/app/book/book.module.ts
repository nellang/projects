import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ConfirmDeactivateGuard} from '../shared/guards/confirm-deactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  providers: [ConfirmDeactivateGuard]
})
export class BookModule {
}
