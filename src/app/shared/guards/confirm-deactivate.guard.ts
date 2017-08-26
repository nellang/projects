import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BookDetailComponent} from '../../book/book-detail/book-detail.component';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(component: BookDetailComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return confirm('Deactivate?');
    return true;
  }
}
