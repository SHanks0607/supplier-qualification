import * as SupplierActions from './supplier-template/store/supplier.actions';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromApp from '../app/store/app.reducer';
import { Store } from '@ngrx/store';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Supplier } from './shared/models/supplier-model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // public suppliers: AngularFireList<any>;

  url = environment.firebaseConfig.databaseURL;

  constructor(
    private store: Store<fromApp.AppState>,
    private database: AngularFireDatabase,
    private http: HttpClient) {}

  // addSupplier(supplier: Supplier[]) {
  //   const suppliers = this.database.list('suppliers');
  //   return suppliers.push(supplier);
  // }

  // getSuppliers() {
  //   return this.http.get<Supplier[]>(this.url + '/suppliers.json')
  //     .pipe(
  //       map(suppliers => {
  //         return suppliers.map(supplier => {
  //           return {
  //             ...supplier
  //           };
  //         });
  //       }),
  //       tap(suppliers => {
  //         this.store.dispatch(new SupplierActions.GetSuppliersSuccess(suppliers));
  //       })
  //     );
  // }

  getSuppliers(): Observable<Supplier>{
    return this.http.get<{[key: string]: Supplier[]}>(this.url + '/suppliers.json')
    .pipe(
      map((data) => {
        const suppliersArray: Supplier[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            suppliersArray.push({...data[key], id: key});
          }
        }
        console.log(suppliersArray);
        return suppliersArray;
      })
    );
  }

  addSupplier(supplier: Supplier[]) {
    this.http.post<Supplier[]>(this.url + '/suppliers.json', supplier);
  }

  deleteSupplier(supplier: Supplier[], id: string) {
    return this.database.object(`suppliers/-M9jb8tZOtf5Mzg_fLnA`).remove();
  }
}
