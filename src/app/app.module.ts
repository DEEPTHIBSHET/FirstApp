import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibHomeComponent } from './lib-home/lib-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LibHomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,                                                            MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
