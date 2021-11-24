import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
