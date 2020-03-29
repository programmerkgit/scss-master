import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportScssModule } from './import-scss/import-scss.module';
import { FunctionScssModule } from './function-scss/function-scss.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportScssModule,
    FunctionScssModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
