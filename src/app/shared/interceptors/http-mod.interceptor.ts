import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { catchError, debounceTime, finalize, tap } from 'rxjs/operators';
import * as actions from '../../store/actions';

@Injectable()
export class HttpModInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => this.store.dispatch(actions.isLoading())),
      debounceTime(1000),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(actions.stopLoading());
        return throwError(error);
      }),
      finalize(() => this.store.dispatch(actions.stopLoading()))
    );
  }
}
