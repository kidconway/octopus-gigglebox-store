import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-octopus',
  templateUrl: './octopus.component.html',
  styleUrls: ['./octopus.component.css']
})
export class OctopusComponent implements OnInit {
  products:any;
  cartOctopuses:any
  constructor(private router: Router) {  }

  ngOnInit() {
    let data=localStorage.getItem('cart')

    if(data !== null){
      this.cartOctopuses = JSON.parse(data)
    } else {
      this.cartOctopuses = []
    }

    this.products = [
      {
        id:1,
        title: "Common Octopus",
        description: "There can be quite a difference in the sizes of the Common Octopus. Some of them are only about 12 inches long while others are three times that at 36 inches in length.",
        img:"assets/common.jpeg",
        price: 120
      },
      {
        id:2,
        title: "Atlantic Pygmy Octopus",
        description: "The Atlantic Pygmy Octopus is very small, only about 5 ½ inches in length overall. Over 3 inches of that is the arms so the mantle part of the body isn’t very much to work with at all. They only weigh about 1 ounce as an adult which makes them one of the smallest species of Octopus in the world..",
        img:"assets/atlantic-pygmy.jpg",
        price: 200
      },
      {
        id:3,
        title: "Blue Ringed Octopus",
        description: "The Blue-Ringed Octopus is one that has a trademark feature about it. They have rings of blue that are around their bodies. Even when they change colors to blend into surroundings those bluish identifying marks are there. Luckily, they live in areas where such colors are often seen as part of the coral reef. They aren’t a give away to predators or even to humans that there is an Octopus present.",
        img:"assets/blue-ringed.jpg",
        price: 535
      },
      {
        id:4,
        title: "California Two-Spot Octopus",
        description: "The California Two-Spot Octopus offers a very distinct appearance. It is also known by the name Bimac Octopus.",
        img:"assets/california-two-spot.jpg",
        price: 190
      },
      {
        id:5,
        title: "East Pacific Red Octopus",
        description: "TThere is a good chance you have heard of the East Pacific Red Octopus. They are small in size and have a body that is about three times smaller than the length of their eight arms.",
        img:"assets/east-pacific-red.jpg",
        price: 970
      },
      {
        id:6,
        title: "Mimic Octopus",
        description: "They aren’t very large Octopus with an overall length of two feet when they are fully grown. They have a normal coloring that spans many spans of brown and white.",
        img:"assets/mimic.jpg",
        price: 1800
      },
      {
        id:7,
        title: "North Pacific Giant Octopus",
        description: "This common octopus is not common at all!  He is a wonderous and intelligent creature full of mysteries and adventures.",
        img:"assets/north-pacific-giant.jpg",
        price: 3500
      },{
        id:8,
        title: "Caribbean Reef Octopus",
        description: "The Caribbean Reef Octopus is one that has a fascinating look to it. The combination of blue and green color is something that gets people’s attention",
        img:"assets/caribbean-reef.jpg",
        price: 465
      }
    ]
  }
  goToCart(){
    this.router.navigate(['/cart'])
  }
  updateCartData (cartData){
    this.cartOctopuses = cartData
  }
  addToCart(index){
    let product = this.products[index]
    let cartData = []
    let data = localStorage.getItem('cart')
    if (data!==null){
      cartData = JSON.parse(data)
    }
    cartData.push(product)
    this.updateCartData(cartData)
    localStorage.setItem('cart', JSON.stringify(cartData))
    this.products[index].isAdded=true
  }
  removeItem(id){
    this.cartOctopuses.splice(id, 1)
    if( this.cartOctopuses.length ){
      localStorage.setItem('cart', JSON.stringify(this.cartOctopuses))
    } else {
      localStorage.setItem('cart', null)
    }
  }

}
