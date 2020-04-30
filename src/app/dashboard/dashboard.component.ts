 import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count=1
  constructor(
  ) { }

  ngOnInit(){
    setInterval(function(){this.count+=this.count }, 30);
     
    }

 
}
