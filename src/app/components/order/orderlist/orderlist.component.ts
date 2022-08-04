import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderheadService } from 'src/app/services/orderhead.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NotificationService } from 'src/app/shared/notification.service';
import { OrderdialogComponent } from '../orderdialog/orderdialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  displayedColumns:string[]=['id','supplierName','orderDate','dueDate','Action']
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private orderHead:OrderheadService,private OrderDetDialog:MatDialog
    ,private notificationService: NotificationService,private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') != "true")
    {
      this.router.navigate(['./'])
    }
    this.getAllOrderHead();
  }
  openDialog() {
    this.OrderDetDialog.open(OrderdialogComponent, {disableClose: true,
      width:'100%',height:'100%'
    }).afterClosed().subscribe(val=>{
      debugger;
      if (val ==='save'){
        
        this.getAllOrderHead();
      }
      else
      {
        this.getAllOrderHead();
      }
    });
  }

  getAllOrderHead(){
    this.orderHead.getorderHead()
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

  editOrderHead(row:any){
    this.OrderDetDialog.open(OrderdialogComponent,{disableClose: true,
      width:'100%',height:'100%',
      data:row
    }).afterClosed().subscribe(val=>{
      if (val ==='update'){
        this.getAllOrderHead();
      }
    });
  }
  deleteOrderHead(id:number){
    this.orderHead.deleteOrderHead(id)
    .subscribe({
      next:(res)=>{
        this.getAllOrderHead();
        this.notificationService.warn('.! Order Deleted successfully');
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
