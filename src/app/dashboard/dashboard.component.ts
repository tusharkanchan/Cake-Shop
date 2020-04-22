import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   
  constructor(
    private dashboard:DashboardService
  ) { }

  ngOnInit(){
    }

  
  
}
