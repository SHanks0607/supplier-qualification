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
  supplierContacts: FormArray;

  private storeSub: Subscription;

  get supplierContactControls() {
    return this.newSupplier.get('supplierContacts')['controls'];
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
      supplierContacts: this.formBuilder.array([
        this.createContact()
      ])
    });
  }

  onSubmit(newSupplier: Supplier) {
    console.log(this.newSupplier.value);
    this.store.dispatch(new SupplierActions.AddSupplier(this.newSupplier.value));

  }

  onAddContact(): void {
    this.supplierContacts = this.newSupplier.get('supplierContacts') as FormArray;
    this.supplierContacts.push(this.createContact());
  }

  createContact(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
}
