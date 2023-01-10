import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
password:any;
userName:any;
resp:any;
errorMessage:any;token:any;
authRequest:any={
 
}
  constructor(private service:CustomerService,private router: Router){

  }


  ngOnInit(): void {
    //this.getAccessToken(this.authRequest);
  }

  getAccessToken(authRequest:any){
    let res=this.service.generateToken(authRequest);
    
    this.resp=res.subscribe({
      next: data => {
          this.resp = data;
      },
      error: error => {
          this.token = error.status;
         console.log(this.token)
        if(this.token == 200)
        {

          this.router.navigate(['/signup'])
        }else{
          Swal.fire("Invalid User Name/Password");
        }
      }
  });


  }

  login(){
    this.authRequest={
      "userName":this.userName,
      "password":this.password


    }

this.getAccessToken(this.authRequest);



  }
}
