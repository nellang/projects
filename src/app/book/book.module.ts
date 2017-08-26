import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ConfirmDeactivateGuard} from '../shared/guards/confirm-deactivate.guard';
import {FormsModule} from '@angular/forms';
import {TooltipDirective} from '../shared/directives/tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    TooltipDirective
  ],
  providers: [ConfirmDeactivateGuard]
})
export class BookModule {
}
