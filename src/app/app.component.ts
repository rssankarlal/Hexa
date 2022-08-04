import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from './services/product.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProductdialogComponent } from './components/productdialog/productdialog.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 public loginstatus:any
  title = 'inventoryproject';
  displayedColumns: string[] = ['id', 'productName', 'productCategory','productFreshness', 'productPrice','productComment','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (private productdialog:MatDialog ,private product:ProductService){
    // if (localStorage.getItem('isLoggedIn') == "true"){
    //   this.loginstatus=true;
    // }
    // else
    // {
    //   this.loginstatus=false;
    // }
  }
  ngOnInit(): void {  
//this.getAllProducts()
    if (localStorage.getItem('isLoggedIn') == "true"){
      this.loginstatus=true;
    }
    else
    {
      this.loginstatus=false;
    }
  }

 
  openDialog() {
    this.productdialog.open(ProductdialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if (val ==='save'){
        this.getAllProducts();
      }
    });
  }
  getAllProducts(){
    this.product.getProduct()
   
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res)
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("error while fetching data");
      }
    })
  }

editProduct(row:any){
  this.productdialog.open(ProductdialogComponent,{
    width:'30%',
    data:row
  }).afterClosed().subscribe(val=>{
    if (val ==='update'){
      this.getAllProducts();
    }
  });
}
deleteProduct(id:number){
  this.product.deleteProduct(id)
  .subscribe({
    next:(res)=>{
      alert("product deleted successfully")
    },
    error:()=>{
      alert("error while deleting record")
    }
  })
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
