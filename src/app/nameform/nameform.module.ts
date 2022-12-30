import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameformComponent } from './nameform.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    NameformComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormControl,
    CommonModule
  ]
})
export class NameformModule { }
