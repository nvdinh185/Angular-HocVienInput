import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HocvienComponent } from './hocvien/hocvien.component';
import { ListhocvienComponent } from './listhocvien/listhocvien.component';

@NgModule({
  declarations: [
    AppComponent,
    HocvienComponent,
    ListhocvienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
