import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AboutComponent } from './about/about.component'
import { CartComponent } from './cart/cart.component'
import { HomeComponent } from './home/home.component'
import { OctopusComponent } from './octopus/octopus.component'
import { SidebarComponent } from './sidebar/sidebar.component'


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'octopuses', component: OctopusComponent},
  {path: 'sidebar-component', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
