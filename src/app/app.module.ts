import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductdialogComponent } from './components/productdialog/productdialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { NavtreeComponent } from './components/common/navtree/navtree.component';
import {MatTreeModule} from '@angular/material/tree';
import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SupplierdashboardComponent } from './components/suppliers/supplierdashboard/supplierdashboard.component';
import { SupplierdialogComponent } from './components/suppliers/supplierdialog/supplierdialog.component';
import { OrderdetailComponent } from './components/orderdetail/orderdetail.component';
import { OrderdetaildialogComponent } from './components/orderdetaildialog/orderdetaildialog.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { CategorydialogComponent } from './components/categorydialog/categorydialog.component';
import { TaxlistComponent } from './components/taxlist/taxlist.component';
import { TaxdialogComponent } from './components/taxdialog/taxdialog.component';
import { OrderlistComponent } from './components/order/orderlist/orderlist.component';
import { OrderdialogComponent } from './components/order/orderdialog/orderdialog.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/common/home/home.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { GrlistComponent } from './components/goodsreceipt/grlist/grlist.component';
import { GrdialogComponent } from './components/goodsreceipt/grdialog/grdialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductdialogComponent,
    ProductlistComponent,
    NavbarComponent,
    NavtreeComponent,
    SupplierdashboardComponent,
    SupplierdialogComponent,
    OrderdetailComponent,
    OrderdetaildialogComponent,
    CategorylistComponent,
    CategorydialogComponent,
    TaxlistComponent,
    TaxdialogComponent,
    OrderlistComponent,
    OrderdialogComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    GrlistComponent,
    GrdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    TreeViewModule,
    MatSnackBarModule,
    MatSidenavModule,MatCardModule
    ,MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
