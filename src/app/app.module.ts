import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { DragDropReqComponent } from './drag-drop-req/drag-drop-req.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { ProjectComponent } from './project/project.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorkflowBarComponent } from './workflow-bar/workflow-bar.component';


/// Material module imports for Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import { CreateComponent } from './create/create.component';
import { DefineComponent } from './define/define.component';
import { ApproveProjectComponent } from './approve-project/approve-project.component';
import { ExecuteProjectComponent } from './execute-project/execute-project.component';
import { ApprovedComponent } from './approved/approved.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { SupplierTemplateComponent } from './supplier-template/supplier-template.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/// App Reducer Import
import * as fromApp from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { SupplierEffects } from './supplier-template/store/supplier.effects';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProjectFormComponent,
    SignUpPageComponent,
    ProjectTableComponent,
    DragDropReqComponent,
    ProjectComponent,
    NavBarComponent,
    WorkflowBarComponent,
    CreateComponent,
    DefineComponent,
    ApproveProjectComponent,
    ExecuteProjectComponent,
    ApprovedComponent,
    CancelledComponent,
    SupplierTemplateComponent,
    SupplierListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'supplier-qualification'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    DragDropModule,
    MatTabsModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production }),
    EffectsModule.forRoot([SupplierEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
