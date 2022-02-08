import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularInfoComponent } from './angular-info/angular-info.component';
import { JavascriptInfoComponent } from './javascript-info/javascript-info.component';
import { NodejsInfoComponent } from './nodejs-info/nodejs-info.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AngularInfoComponent,
    JavascriptInfoComponent,
    NodejsInfoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
