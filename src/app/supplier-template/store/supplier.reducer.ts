import { Supplier } from '../../shared/models/supplier-model';
import * as SupplierActions from './supplier.actions';

export interface SuppliersState {
  loading: boolean;
  suppliers: Supplier[];
}

const initialState: SuppliersState = {
  loading: false,
  suppliers: []
};

export function supplierReducer(state = initialState, action: SupplierActions.SupplierActions) {
  switch (action.type) {
    case SupplierActions.GET_SUPPLIERS:
      return {
        ...state,
        loading: true
      };
    case SupplierActions.GET_SUPPLIERS_SUCCESS:
      return {
        loading: false,
        suppliers: [...state.suppliers, action.payload]
      };
    case SupplierActions.ADD_SUPPLIER:
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload]
      };
    case SupplierActions.UPDATE_SUPPLIER:
      const updatedSupplier = {
        ...state.suppliers[action.payload.index],
        ...action.payload.newSupplier
      };
      const updatedSuppliers = [...state.suppliers];
      updatedSuppliers[action.payload.index] = updatedSupplier;
      return {
        ...state,
        suppliers: updatedSuppliers
      };
    default:
    return state;
  }
}
