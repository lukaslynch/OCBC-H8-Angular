import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[] = []
  id: number
  constructor(public authService: AuthService, public router:Router, private actRoute: ActivatedRoute) { 
    this.id = actRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.authService.getEmployee().subscribe(res => {
      this.employees = res
    })
  }

  deleteEmployee(id: number){
    this.authService.deleteEmployee(id).subscribe((response) => {
      this.getData()
    })
  }

}
