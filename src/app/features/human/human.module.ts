import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HumanComponent} from "./human.component";



@NgModule({
  declarations: [HumanComponent],
  imports: [
    CommonModule
  ],
  exports: [HumanComponent]
})
export class HumanModule { }
