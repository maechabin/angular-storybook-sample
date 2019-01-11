import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, InputComponent, ButtonComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
