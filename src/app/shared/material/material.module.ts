import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,

  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,

  ]
})
export class MaterialModule { }
