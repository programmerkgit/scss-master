import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportScssComponent } from './import-scss.component';


const routes: Routes = [
  {path: 'import-scss', component: ImportScssComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ImportScssRoutingModule {
}
