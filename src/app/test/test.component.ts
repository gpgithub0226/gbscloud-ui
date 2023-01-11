import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent {
filterForm: FormGroup;
filterFields: any[];
public  dummy:any;
page:any;
  constructor(private fb: FormBuilder,
  private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
            this.page = params['Link'];
           // console.log(date); // Print the parameter to the console.
             //alert(date);
        });
  }
valueJson:any;
  ngOnInit() {

if(this.page == "GST_Beneficiary_State_code_Master")
{
this.valueJson=0;
}else{
this.valueJson=1;
}
    this.httpClient.get<any >("assets/emp.json").subscribe(data =>{
        this.filterFields=[[data][0][this.valueJson]];
      this.filterForm = this.generateFilterForm();
      })
    this.filterFields = this.dummy;
  }

ss(){
alert('sasthaedede');
}
dummy_fun()
{
// alert('dummy_fun');
}
  generateFilterForm(): FormGroup {
    const baseForm = this.fb.group({});
    this.filterFields.forEach(field => {
      baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
       console.log(field);
    });
       console.log(baseForm);

    return baseForm;
  }

  generateFormGroup(baseForm: FormGroup, field: { group: any[]; }): FormGroup|FormControl {
    if (field.group) {
      const formGroup = this.fb.group({});
      field.group.forEach(item => {
        formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
      });
             console.log("formGroup-"+formGroup);

      return formGroup;
    }

      return new FormControl("");
  }
}
