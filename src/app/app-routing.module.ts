import { ProjectComponent } from './project/project.component';
/// Angular capabilities
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/// Angular components
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { ProjectTableComponent } from './project-table/project-table.component';

const routes: Routes = [
  {
    path: 'new', component: NewProjectFormComponent
  },
  {
    path: '', component: SignUpPageComponent
  },
  {
    path: 'project-table', component: ProjectTableComponent
  },
  {
    path: 'project/:id', component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
