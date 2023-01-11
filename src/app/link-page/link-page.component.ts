import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.sass']
})
export class LinkPageComponent {
listOfValues:any;
constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
     private httpClient: HttpClient
  ) {}
  changeParam(value: string): void {
    this.router.navigate([], { queryParams: { param: value } });
  }
x:any;
xx()
{
this.httpClient.get<any >("assets/test.json").subscribe(data =>{
        this.listOfValues=[[data][0][0]];
        this.listOfValues=this.listOfValues[0]['GST'];
 console.log(this.listOfValues);
      })
}
}
