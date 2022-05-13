import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
@Output() homepageemitter = new EventEmitter<any>()
  icon: any;
  constructor(private http: HttpClient) { }
   temp :string;
   city: string;
   description: string
   
   icon_url: any;

  ngOnInit(): void {
    const url = url;
    this.http.get(url).subscribe((response: any) =>{
      console.log(response);
      console.log(response.main.temp, response.name, response.weather[0].description, response.weather[0].icon);

      this.temp = response.main.temp
       this.city = response.name
       this.description= response.weather[0].description
       this.icon = response.weather[0].icon;
       this.icon_url = 'http://openweathermap.org/img/wn/'+this.icon+'@2x.png'
    
     })

  }
  loadForm(){
    this.homepageemitter.emit()
  }
}
