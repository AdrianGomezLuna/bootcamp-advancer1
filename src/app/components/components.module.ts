import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaterialModule } from '../shared/material/material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AllUsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    AllUsersComponent,
    UserDetailComponent
  ]
})
export class ComponentsModule { }
