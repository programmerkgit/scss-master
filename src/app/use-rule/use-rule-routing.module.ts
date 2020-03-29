import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseRuleComponent } from './use-rule.component';


const routes: Routes = [
  {path: 'use-rule', component: UseRuleComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UseRuleRoutingModule {
}
