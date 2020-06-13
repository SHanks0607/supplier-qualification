import { Action } from '@ngrx/store';
import { Supplier } from '../../shared/models/supplier-model';

export const ADD_SUPPLIER = '[Suppliers] Add Supplier';
export const GET_SUPPLIERS = '[Suppliers] Get Suppliers';
export const UPDATE_SUPPLIER = '[Suppliers] Update Suppliers';

export class AddSupplier implements Action {
  readonly type = ADD_SUPPLIER;

  constructor(public payload: Supplier) {}
}

export class GetSuppliers implements Action {
  readonly type = GET_SUPPLIERS;

}

export class UpdateSupplier implements Action {
  readonly type = UPDATE_SUPPLIER;

  constructor(public payload: {index: number, newSupplier: Supplier}) {}
}

export type SupplierActions =
  | AddSupplier
  | GetSuppliers
  | UpdateSupplier;
