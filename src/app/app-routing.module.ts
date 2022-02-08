import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularInfoComponent } from './angular-info/angular-info.component';
import { JavascriptInfoComponent } from './javascript-info/javascript-info.component';
import { NodejsInfoComponent } from './nodejs-info/nodejs-info.component';

const routes: Routes = [
{ path: '', redirectTo: '/angular', pathMatch: 'full' },
{path:'angular' , component:AngularInfoComponent},
{path:'javascript', component:JavascriptInfoComponent},
{path:'nodejs', component:NodejsInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
