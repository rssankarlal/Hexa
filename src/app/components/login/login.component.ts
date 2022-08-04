import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loginstatus:any;
  public loginForm!:FormGroup
  error:any;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    localStorage.setItem('isLoggedIn',"false") ;
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']

    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{

        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(user){
        //alert("Login Success");
        this.notificationService.success(':: Login Success');
        localStorage.setItem('isLoggedIn',"true") ;
        this.loginstatus="true"
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else{
        localStorage.setItem('isLoggedIn',"false") ;
        //alert("user not fount")
        this.notificationService.warn(':: user not fount');
      }
    
      },err=>{
        localStorage.setItem('isLoggedIn',"false") ;
        alert("something went wrong")
      }
    
    
    )}

}
