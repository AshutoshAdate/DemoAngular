import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../read-data.service';
@Component({
  selector: 'app-angular-info',
  templateUrl: './angular-info.component.html',
  styleUrls: ['./angular-info.component.css']
})
export class AngularInfoComponent implements OnInit {
  readData: any;
  date=new Date();
  constructor(private fetchData: ReadDataService) { }

  ngOnInit(): void {
    this.fetchData.getData().subscribe(data=>{
      // get angular information from API call and stored in readData
      this.readData = data.filter((e:any) => { return e.language === 'Angular' })[0];
      console.log(this.readData);
    })

    
  }

}
