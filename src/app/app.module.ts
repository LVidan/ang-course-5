import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangesComponent } from './components/changes/changes.component';
import { ProductComponent } from './components/product/product.component';
import { ChangeFontDirective } from './directives/change-font.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangesComponent,
    ProductComponent,
    ChangeFontDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
