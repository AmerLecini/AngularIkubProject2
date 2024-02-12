import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { IncreaseDecreaseComponent } from './increase-decrease/increase-decrease.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    IncreaseDecreaseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
