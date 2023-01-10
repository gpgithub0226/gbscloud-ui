import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: CustomerComponent },
  // { path: 'login', component: CustomerComponent },
   { path: 'signup', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
