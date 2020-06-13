import { SupplierContact } from './../shared/models/supplier-model';
import * as SupplierActions from './store/supplier.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { Supplier } from '../shared/models/supplier-model';

@Component({
  selector: 'app-supplier-template',
  templateUrl: './supplier-template.component.html',
  styleUrls: ['./supplier-template.component.scss']
})
export class SupplierTemplateComponent implements OnInit {
  id: number;
  newSupplier: FormGroup;

  private storeSub: Subscription;

  get supplierContactControls() {
    return (this.newSupplier.get('contacts') as FormArray).controls;
  }

  constructor(
    private store: Store<fromApp.AppState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newSupplier = this.formBuilder.group({
      supplierName: ['', Validators.required],
      supplierStreet: ['', Validators.required],
      supplierCity: ['', Validators.required],
      supplierContacts: {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required]
      }
    });
  }

  onSubmit(newSupplier: Supplier) {
    console.log(this.newSupplier.value);
    this.store.dispatch(new SupplierActions.AddSupplier(this.newSupplier.value));

  }

  onAddContact() {
    this.supplierContactControls.push(this.newSupplier.value);
  }

  // private initForm() {
  //   const supplierName = '';
  //   const supplierStreet = '';
  //   const supplierCity = '';
  //   // const supplierContacts = new FormArray([]);

  //   this.supplierForm = new FormGroup({
  //     supplierName: new FormControl(supplierName, Validators.required),
  //     supplierStreet: new FormControl(supplierStreet, Validators.required),
  //     supplierCity: new FormControl(supplierCity, Validators.required),
  //     // contacts: supplierContacts
  //   });
  // }
}
