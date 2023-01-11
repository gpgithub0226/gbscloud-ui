import { Component,OnInit } from '@angular/core';
import{LoginService} from '../service/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
constructor(private dataService: LoginService) { }
//
// user1 = [];
// user = [];
//
//
ngOnInit() {
//
//   this.get();
//   this.get_data();
}
//
//
// get() {
//
//   this.dataService.getUsers1().subscribe((data: any) => this.user1 = data);
// }
user:any;

get_data() {
alert();
  this.dataService.getUsers1().subscribe((data: any) => this.user = data);
  console.log(this.user);
}

}
