import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  userName: string = "Robert"
  userNameLise: string[] = ["tfdfsdf", "sdfsdf"];
  anyvariable: Recipe[] = [
    new Recipe('cake', 'plain cake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsMoMs7E4KoSXRw1Iby4ysQ1kRo1cu9zrUw&usqp=CAU'),
    new Recipe('shrimp', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    this.userName = "Robert";
    this.userNameLise = ["Ronert", "aspm"]
  }

}
