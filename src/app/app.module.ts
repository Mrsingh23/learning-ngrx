import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Subject101Component } from './subject101/subject101.component';
import { Behavior101Component } from './behavior101/behavior101.component';
import { Replay101Component } from './replay101/replay101.component';
import { NgModel101Component } from './ng-model101/ng-model101.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Subject101Component,
    Behavior101Component,
    Replay101Component,
    NgModel101Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
