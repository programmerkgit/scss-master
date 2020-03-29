import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseRuleRoutingModule } from './use-rule-routing.module';
import { UseRuleComponent } from './use-rule.component';


@NgModule({
  declarations: [UseRuleComponent],
  imports: [
    CommonModule,
    UseRuleRoutingModule
  ]
})
export class UseRuleModule { }
