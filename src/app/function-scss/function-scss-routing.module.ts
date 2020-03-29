import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportScssComponent } from '../import-scss/import-scss.component';
import { FunctionScssComponent } from './function-scss.component';


const routes: Routes = [ {
  path: 'function-scss', component: FunctionScssComponent
} ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FunctionScssRoutingModule {
}
