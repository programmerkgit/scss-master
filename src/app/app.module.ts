import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportScssModule } from './import-scss/import-scss.module';
import { FunctionScssModule } from './function-scss/function-scss.module';
import { UseRuleModule } from './use-rule/use-rule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportScssModule,
    FunctionScssModule,
    UseRuleModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
