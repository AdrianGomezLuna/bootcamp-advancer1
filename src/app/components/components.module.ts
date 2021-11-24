import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    AllUsersComponent
  ]
})
export class ComponentsModule { }
