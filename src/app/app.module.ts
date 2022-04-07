import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentGroupComponent } from './component-group/component-group.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentGroupComponent,
    SuccessComponentComponent,
    WarningComponentComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
