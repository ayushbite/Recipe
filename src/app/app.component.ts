import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

//navigate to toggle between shoppinglist and recipe
loadedComponent = "recipe";
navigateonclick(data){
  this.loadedComponent = data;
  // console.log("from parrendt conponent"+data)
}
}
