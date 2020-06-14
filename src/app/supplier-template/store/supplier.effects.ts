import { AdminService } from './../../admin.service';
import * as supplierActions from './supplier.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, switchMap } from 'rxjs/operators';


@Injectable()
export class SupplierEffects {

  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private store: Store<fromApp.AppState>
  ) {}

  // addSupplier$: Observable<Action> = createEffect(() => this.actions$.pipe(
  //     ofType(fromSuppliers.ADD_SUPPLIER),
  //     map((action: fromSuppliers.AddSupplier) => action.payload),
  //     withLatestFrom(this.store.select('suppliers')),
  //     switchMap([actionData, supplierState] => {
  //       this.adminService.addSupplier(payload.Supplier);
  //   })
  // );

  @Effect({dispatch: false})
  added$ = this.actions$.pipe(
    ofType(supplierActions.ADD_SUPPLIER),
    withLatestFrom(this.store.select('suppliers')),
    switchMap(([data, SuppliersState]) => this.adminService.addSupplier(SuppliersState.suppliers))
  );

}
