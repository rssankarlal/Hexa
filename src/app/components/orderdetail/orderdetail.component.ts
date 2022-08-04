import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderdetailService } from 'src/app/services/orderdetail.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OrderdetaildialogComponent } from '../orderdetaildialog/orderdetaildialog.component';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  displayedColumns:string[]=['id','ProductId','qty','rate','taxper']
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private OrderService:OrderdetailService,private OrderDetDialog:MatDialog) { }

  ngOnInit(): void {
   // this.getAllOrderDetail();
  }
  // openDialog() {
  //   this.OrderDetDialog.open(OrderdetaildialogComponent, {disableClose: true,
  //     width:'100%',height:'100%'
  //   }).afterClosed().subscribe(val=>{
  //     if (val ==='save'){
  //       this.getAllOrderDetail();
  //     }
  //   });
  // }

  // getAllOrderDetail(){
  //   this.OrderService.getorderdetail()
   
  //   .subscribe({
  //     next:(res)=>{
  //       this.dataSource=new MatTableDataSource(res)
  //       this.dataSource.paginator=this.paginator;
  //       this.dataSource.sort=this.sort;
  //     },
  //     error:(err)=>{
  //       alert("error while fetching data");
  //     }
  //   })
  // }
  // editOrderdetail(row:any){
  //   this.OrderDetDialog.open(OrderdetaildialogComponent,{
  //     width:'55%',
  //     data:row
  //   }).afterClosed().subscribe(val=>{
  //     if (val ==='update'){
  //       this.getAllOrderDetail();
  //     }
  //   });
  // }
  // deleteOrderDetail(id:number){
  //   this.OrderService.deleteOrderdetail(id)
  //   .subscribe({
  //     next:(res)=>{
  //       alert("supplier deleted successfully")
  //     },
  //     error:()=>{
  //       alert("error while deleting record")
  //     }
  //   })
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
