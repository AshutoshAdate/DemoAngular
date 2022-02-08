import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../read-data.service';

@Component({
  selector: 'app-javascript-info',
  templateUrl: './javascript-info.component.html',
  styleUrls: ['./javascript-info.component.css']
})
export class JavascriptInfoComponent implements OnInit {
  readData:any;
  date=new Date();
  constructor(private fetchData:ReadDataService) { }

  ngOnInit(): void {
    this.fetchData.getData().subscribe(data=>{
      this.readData = data.filter((e:any)=>{return e.language === 'javascript'})[0];
    });
  }

}
