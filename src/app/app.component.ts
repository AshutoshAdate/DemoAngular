import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  date = new Date();
  index:number;
  page:string[];

  constructor(private router:Router){
    this.index=0;
    this.page=['angular','javascript','nodejs'];
  }
  next(){
    if(this.index=== 2){
      this.index = 0;
    }else{
      this.index += 1;
    }
    this.router.navigate([this.page[this.index]])
  }

  prew(){
    if(this.index=== 0){
      this.index = 2;
    }else{
      this.index -= 1;
    }
    this.router.navigate([this.page[this.index]])
  }
  
}
