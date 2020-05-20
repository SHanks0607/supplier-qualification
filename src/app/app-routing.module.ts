import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'new', component: NewProjectFormComponent
  },
  {
    path: '', component: SignUpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
