import { ActionReducerMap } from '@ngrx/store';
import * as fromSupplier from '../supplier-template/store/supplier.reducer';

export interface AppState {
  suppliers: fromSupplier.SuppliersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  suppliers: fromSupplier.supplierReducer
};
