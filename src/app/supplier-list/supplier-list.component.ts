import { AdminService } from './../admin.service';
import { SuppliersState } from './../supplier-template/store/supplier.reducer';
import { getSuppliers } from './../supplier-template/store/supplier.selector';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Supplier } from '../shared/models/supplier-model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as fromSuppliers from './../supplier-template/store/supplier.actions';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers: Supplier[];
  subscription: Subscription;

  constructor(private supplierService: AdminService ) { }

  ngOnInit() {
    this.supplierService.getSuppliers().
      subscribe((data: any) => {
        this.suppliers = data;
        this.suppliers = data.key;
      });
  }



}
