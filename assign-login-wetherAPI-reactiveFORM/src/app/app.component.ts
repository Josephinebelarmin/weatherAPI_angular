import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign-login-wetherAPI-reactiveFORM';

  @Output() firstName:string;
  showcomponent: string = 'home';
  loadFormcomp(){
    this.showcomponent = 'form'
  }
  sendToWelcomePage(fName:any){
  this.firstName = fName;
    console.log("from appcomponent:" + fName);
  }
}
