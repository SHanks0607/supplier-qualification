import { getSuppliers } from './supplier.selector';
import { AdminService } from './../../admin.service';
import * as supplierActions from './supplier.actions';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { withLatestFrom, switchMap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/shared/models/supplier-model';


@Injectable()
export class SupplierEffects {

  constructor(
    private actions$: Actions,
    private adminService: AdminService,
    private store: Store<fromApp.AppState>
  ) {}

  // @Effect()
  // query$ = this.actions$.pipe(
  //   ofType(supplierActions.GET_SUPPLIERS),
  //   switchMap(() => this.adminService.getSuppliers()
  //   .pipe(
  //     map((data: any) => {
  //       return data.map((supplier: any) => {
  //         return {
  //           ...supplier
  //         };
  //       });
  //     }),
  //     map(suppliers => {
  //       return new supplierActions.GetSuppliersSuccess(suppliers);
  //     })
  //   ))
  // );

  // @Effect()
  // query$ = this.actions$.pipe(
  //   ofType(supplierActions.GET_SUPPLIERS),
  //   switchMap(() => {
  //     return this.adminService.getSuppliers();
  //   }),
  //   map(suppliers => {
  //     return suppliers.map(supplier => {
  //       return {
  //         ...supplier
  //       };
  //     });
  //   }),
  //   map(suppliers => {
  //     return new supplierActions.GetSuppliersSuccess(suppliers);
  //   })
  //   );


  // @Effect({dispatch: false})
  // added$ = this.actions$.pipe(
  //   ofType(supplierActions.ADD_SUPPLIER),
  //   withLatestFrom(this.store.select('suppliers')),
  //   switchMap(([data, SuppliersState]) => this.adminService.addSupplier(SuppliersState.suppliers))
  // );

  @Effect({dispatch: false})
  delete$ = this.actions$.pipe(
    ofType(supplierActions.DELETE_SUPPLIER),
    withLatestFrom(this.store.select('suppliers')),
    switchMap(([data, SupplierState]) => this.adminService.deleteSupplier(SupplierState.suppliers, 'id'))
  );

}
