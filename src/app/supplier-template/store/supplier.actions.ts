import { Supplier } from './../../shared/models/supplier-model';
import { Action } from '@ngrx/store';

export const ADD_SUPPLIER = '[Suppliers] Add Supplier';
export const GET_SUPPLIERS = '[Suppliers] Get Suppliers';
export const GET_SUPPLIERS_SUCCESS = '[Suppliers] Get Suppliers Success';
export const UPDATE_SUPPLIER = '[Suppliers] Update Suppliers';
export const DELETE_SUPPLIER = '[Suppliers] Delete Supplier';

export class AddSupplier implements Action {
  readonly type = ADD_SUPPLIER;

  constructor(public payload: Supplier) {}
}

export class GetSuppliers implements Action {
  readonly type = GET_SUPPLIERS;

}

export class GetSuppliersSuccess implements Action {
  readonly type = GET_SUPPLIERS_SUCCESS;

  constructor(public payload: Supplier[]) {}
}

export class UpdateSupplier implements Action {
  readonly type = UPDATE_SUPPLIER;

  constructor(public payload: {index: number, newSupplier: Supplier}) {}
}

export class DeleteSupplier implements Action {
  readonly type = DELETE_SUPPLIER;

  constructor(public payload: { supplier: Supplier}) {}
}

export type SupplierActions =
  | AddSupplier
  | GetSuppliers
  | GetSuppliersSuccess
  | UpdateSupplier
  | DeleteSupplier;
