import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { AuthService } from 'src/app/services/auth.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee_id: number
  emp: Employee = {} as Employee

  updateData = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(10)]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required]),
    editRole: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.minLength(10), Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })
  constructor(public AuthService:AuthService, public router:Router, private activatedRoute: ActivatedRoute) {
    this.employee_id = activatedRoute.snapshot.params.id
   }

   get title(){
     return this.updateData.get('title')
   }

   get firstName(){
     return this.updateData.get('firstName')
   }

   get lastName(){
    return this.updateData.get('lastName')
  }
  get role(){
    return this.updateData.get('role')
  }
  get email(){
    return this.updateData.get('email')
  }
  get password(){
    return this.updateData.get('password')
  }
  get confirmPassword(){
    return this.updateData.get('confirmPassword')
  }

  employeeById(id:number){
    this.AuthService.employeeById(id)
    .subscribe(e => {
      console.log(e, "<<<<getById")
      this.emp = e
      //set value untuk edit form
      this.updateData.controls['title'].setValue(e.title)
      this.updateData.controls['firstName'].setValue(e.firstName)
      this.updateData.controls['lastName'].setValue(e.lastName)
      this.updateData.controls['email'].setValue(e.email)
      this.updateData.controls['role'].setValue(e.role)
    })
  }

  doUpdate(){

    console.log(this.employee_id)
    console.log(this.updateData.value)
    this.AuthService.updateEmployee(this.updateData.value, this.employee_id)
    .subscribe((res) =>{
      if(res){
        this.updateData.reset()
        this.router.navigate(['home'])
      }
    })
  }

  ngOnInit(): void {
    this.employeeById(this.employee_id)
  }

}
