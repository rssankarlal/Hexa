import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NotificationService } from 'src/app/shared/notification.service';
import { TaxService } from 'src/app/services/tax.service';
import { TaxdialogComponent } from '../taxdialog/taxdialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-taxlist',
  templateUrl: './taxlist.component.html',
  styleUrls: ['./taxlist.component.css']
})
export class TaxlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taxcode','taxdesc','taxper','cgst','sgst','Action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private TaxService:TaxService
    ,private notificationService: NotificationService
    ,private categoryDialog:MatDialog 
    ,private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') != "true")
    {
      this.router.navigate(['./'])
    }
    this.getAllTax();
  }
  openDialog() {
    this.categoryDialog.open(TaxdialogComponent, {disableClose: true,
      width:'60%',height:'50%',
    }).afterClosed().subscribe(val=>{
      if (val ==='save'){
        this.getAllTax();
      }
    });
  }
  getAllTax(){
    this.TaxService.getTax()
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

  editTax(row:any){
    this.categoryDialog.open(TaxdialogComponent,{
      width:'60%',height:'50%',
      data:row
    }).afterClosed().subscribe(val=>{
      if (val ==='update'){
        this.getAllTax();
      }
    });
  }
  deleteTax(id:number){
    this.TaxService.deleteTax(id)
    .subscribe({
      next:(res)=>{
        
        this.notificationService.warn('.! Tax Deleted successfully');
        this.getAllTax();
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
