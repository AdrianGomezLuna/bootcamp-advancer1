import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

const routes: Routes = [
  {
    path: 'allUsers',
    component: AllUsersComponent
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: '',
    redirectTo: 'allUsers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'allUsers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
