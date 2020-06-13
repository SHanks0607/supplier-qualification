export class Supplier {
  constructor(
    supplierName: string,
    supplierStreet?: string,
    supplierCity?: string,
    supplierState?: string,
    supplierContacts?: SupplierContact[]
  ) {}
}

export class SupplierContact {
  constructor(
    firstName: string,
    lastName?: string,
    email?: string
  ) {}
}
