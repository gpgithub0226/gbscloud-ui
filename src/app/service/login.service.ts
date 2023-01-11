import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
apiUrl = 'https://10.54.6.34:7002/gbsultra/gbmultra/user/login';
apiUrl1 = 'https://10.54.6.34:7002/gbsultra/gbmultra/user/login';
data={
       "username": "LOKESH",
       "password": "Hq3EZAhbFjBA+8U7LEwA1Q==",
       "userDomain": "STAND_ALONE",
       "isForcingLogoutPreviousUser": ""
     };

// tslint:disable-next-line:variable-name
constructor(private http: HttpClient) {
}
op:any;
getUsers1() {
//   return this.http.post(this.apiUrl);
return   this.http.post<any>(this.apiUrl, {
                                            "username": "LOKESH",
                                            "password": "Hq3EZAhbFjBA+8U7LEwA1Q==",
                                            "userDomain": "STAND_ALONE",
                                            "isForcingLogoutPreviousUser": ""
                                          });
}
getUsers() {
  return this.http.get(this.apiUrl1);
}
}
