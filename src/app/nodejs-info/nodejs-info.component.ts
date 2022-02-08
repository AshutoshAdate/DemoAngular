import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../read-data.service';

@Component({
  selector: 'app-nodejs-info',
  templateUrl: './nodejs-info.component.html',
  styleUrls: ['./nodejs-info.component.css']
})
export class NodejsInfoComponent implements OnInit {
  readData:any;
  date=new Date();
  constructor(private fetchData:ReadDataService) { };


  ngOnInit(): void {
    this.fetchData.getData().subscribe(data=>{
      this.readData = data.filter((e:any)=>{return e.language === 'Node JS'})[0];
    })
  }

}
