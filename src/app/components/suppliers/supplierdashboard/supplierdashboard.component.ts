import { Component, OnInit,ViewChild } from '@angular/core';

import { SupplierService } from 'src/app/services/supplier.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SupplierdialogComponent } from '../supplierdialog/supplierdialog.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-supplierdashboard',
  templateUrl: './supplierdashboard.component.html',
  styleUrls: ['./supplierdashboard.component.css']
})
export class SupplierdashboardComponent implements OnInit {
  title = 'inventoryproject';

  displayedColumns: string[] = ['id', 'SupplierName', 'SupplierAddress','ContactName', 'ContactNumber','ContactEmail','GSTNumber','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private supplier:SupplierService,private supplierdialog:MatDialog
    ,private notificationService: NotificationService,private router: Router) { }


  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') != "true")
    {
      this.router.navigate(['./'])
    }
    this.getAllSuppliers()
  }
  openDialog() {
    this.supplierdialog.open(SupplierdialogComponent, {disableClose: true,
      width:'60%',height:'50%',
    }).afterClosed().subscribe(val=>{
      if (val ==='save'){
        this.getAllSuppliers();
      }
    });
  }
  getAllSuppliers(){
    this.supplier.getSupplier()
   
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
  editSupplier(row:any){
    this.supplierdialog.open(SupplierdialogComponent,{
      width:'60%',height:'50%',
      data:row
    }).afterClosed().subscribe(val=>{
      if (val ==='update'){
        this.getAllSuppliers();
      }
    });
  }
  deleteSupplier(id:number){
    this.supplier.deleteSupplier(id)
    .subscribe({
      next:(res)=>{
        
        this.notificationService.warn('.! Supplier Deleted successfully');
        this.getAllSuppliers();
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

