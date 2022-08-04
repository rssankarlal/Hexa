import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SupplierdashboardComponent } from './components/suppliers/supplierdashboard/supplierdashboard.component';
import { SupplierdialogComponent } from './components/suppliers/supplierdialog/supplierdialog.component';
import { OrderdetailComponent } from './components/orderdetail/orderdetail.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { TaxlistComponent } from './components/taxlist/taxlist.component';
import { OrderlistComponent } from './components/order/orderlist/orderlist.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/common/home/home.component';
import { GrlistComponent } from './components/goodsreceipt/grlist/grlist.component';
const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
      },
  {
    path:'products',component:ProductlistComponent
  },
  {
    path:'suppliers',component:SupplierdashboardComponent
  },
  {
    path:'category',component:CategorylistComponent
  },
  {
    path:'tax',component:TaxlistComponent
  },
  {
    path:'orderlist',component:OrderlistComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'goodsreceipt',component:GrlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
