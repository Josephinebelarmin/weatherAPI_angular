import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  @Input() firstName:any;
  constructor() {
   }

  ngOnInit(): void {
    
  }
  

}
