import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportScssRoutingModule } from './import-scss-routing.module';
import { ImportScssComponent } from './import-scss.component';


@NgModule({
  declarations: [ImportScssComponent],
  imports: [
    CommonModule,
    ImportScssRoutingModule
  ]
})
export class ImportScssModule { }
