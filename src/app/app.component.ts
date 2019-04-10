import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ''
  url = ''
  listItems: any
  constructor(){

    console.log('Octopus Gigglebox is such a delightfully silly name')
    this.listItems = [
      {name: 'Home', link:'#/home'},
      {name: 'About', link:'#/about'},
      {name: 'Cart', link:'#/cart'},
      {name: 'Octopuses', link:'#/octopuses'}
    ]
  }
  add(title,url){
    if(title !== '' && url !== ''){
      url = 'http://' + url;
      this.listItems.push({
        name:title,
        link:url,
        isNew:true});
    }
  }
}
