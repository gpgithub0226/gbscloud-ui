import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [{path:'',component:LoginPageComponent}
,{path:'test',component:TestComponent}
,{path:'linkPage',component:LinkPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[LoginPageComponent,LinkPageComponent,TestComponent];
