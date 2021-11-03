import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form = {
    inputData: new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(1)]),
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      role:new FormControl('',[Validators.required,Validators.minLength(1)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmpassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }
  constructor(public AuthService: AuthService, public router:Router) { }

  get title(){
    return this.form.inputData.get('title')
  }

  get firstName(){
    return this.form.inputData.get('firstname')
  }

  get lastName() {
    return this.form.inputData.get('lastname')
  }

  get role() {
    return this.form.inputData.get('role')
  }

  get email() {
    return this.form.inputData.get('email')
  }

  get password(){
    return this.form.inputData.get('password')
  }

  get confirmPassword(){
    return this.form.inputData.get('confirmpassword')
  }

  addEmployee(){
    this.AuthService.addEmployee(this.form.inputData.value)
    .subscribe((res) => {
      if(res){
        this.form.inputData.reset()
        this.router.navigate(['home'])
      }
    })
  }

  ngOnInit(): void {
  }

}
