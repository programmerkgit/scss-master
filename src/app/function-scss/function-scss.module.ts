import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionScssRoutingModule } from './function-scss-routing.module';
import { FunctionScssComponent } from './function-scss.component';


@NgModule({
  declarations: [FunctionScssComponent],
  imports: [
    CommonModule,
    FunctionScssRoutingModule
  ]
})
export class FunctionScssModule { }
