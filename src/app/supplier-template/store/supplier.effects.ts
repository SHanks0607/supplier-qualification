import { HttpClient } from '@angular/common/http';
import * as SupplierActions from './supplier.actions';
import { Supplier } from '../../shared/models/supplier-model';
import { Injectable } from '@angular/core';
import { Store, ActionReducerMap } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, switchMap } from 'rxjs/operators';

@Injectable()
export class SupplierEffects {

  private supplierAPI = 'https://prototype-c1476.firebaseio.com/suppliers.json';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  @Effect({dispatch: false})
    addSupplier = this.actions$.pipe(
      ofType(SupplierActions.ADD_SUPPLIER),
      withLatestFrom(this.store.select('suppliers')),
      switchMap(([actionData, supplierState]) => {
        return this.http.post(this.supplierAPI, supplierState.suppliers);
    })
  );

}
