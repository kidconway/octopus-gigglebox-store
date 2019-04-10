import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  cartOctopuses: any
  bill: any
  constructor() {
  let cartOctopuses = []
  let bill: 0
  }

  ngOnInit() {
    this.initiateData()
  }
  initiateData(){

    let data = localStorage.getItem('cart')
    if (data !== null) {
      this.cartOctopuses = JSON.parse(data)
      this.bill = 0
      for ( let i = 0; i < this.cartOctopuses.length;i++){
        this.cartOctopuses[i]['qt'] = 1
        this.bill = this.bill + this.cartOctopuses[i].price * this.cartOctopuses[i].qt
      }
    } else {
      this.cartOctopuses = []
    }
  }



  updateTotal(){
    this.bill = 0
    let subtotal
    for(let i in this.cartOctopuses){
      this.bill = this.bill + this.cartOctopuses[i].price * this.cartOctopuses[i].qt
    }
  }
  removeItem(id){
    this.cartOctopuses.splice(id, 1)
    if( this.cartOctopuses.length ){
      localStorage.setItem('cart', JSON.stringify(this.cartOctopuses))
    } else {
      localStorage.setItem('cart', null)
    }
  }
  payBill(){
    if(this.cartOctopuses.length){
      localStorage.removeItem('cart')
      this.initiateData()
      alert('Your bill is: ' + this.bill)
    } else {
      alert('No items in cart')
    }
  }
}
