import { SuppliersState } from './supplier.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getSupplierState = createFeatureSelector<SuppliersState>('suppliers');

export const getSuppliers = createSelector(
  getSupplierState,
  suppliers => suppliers.suppliers
);
