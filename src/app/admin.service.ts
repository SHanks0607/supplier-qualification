import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromApp from '../app/store/app.reducer';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from '@angular/fire/database';
import { Supplier } from './shared/models/supplier-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = environment.firebaseConfig.databaseURL + 'suppliers';

  constructor(
    private store: Store<fromApp.AppState>,
    private database: AngularFireDatabase) { }

  addSupplier(supplier: Supplier[]) {
    const suppliers = this.database.list('suppliers');
    return suppliers.push(supplier);
  }

  deleteSupplier(supplier: Supplier[], id: string) {
    return this.database.object(`suppliers/-M9jb8tZOtf5Mzg_fLnA`).remove();
  }
}
