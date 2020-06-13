import { Supplier } from '../../shared/models/supplier-model';
import * as SupplierActions from './supplier.actions';

export interface State {
  suppliers: Supplier[];
}

const initialState: State = {
  suppliers: []
};

export function supplierReducer(state = initialState, action: SupplierActions.SupplierActions) {
  switch (action.type) {
    // case SupplierActions.ADD_SUPPLIER:
    //   return {
    //     ...state,
    //     suppliers: [...state.suppliers, action.payload]
    //   };
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
