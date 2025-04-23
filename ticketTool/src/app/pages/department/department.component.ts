import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-department',
  imports: [DatePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  deptList:any[] = [];
  newDeptList :any = {
    "deptId": 0,
    "deptName": "",
    "createdDate": ""
  }

  masterService = inject(MasterService);
  ngOnInit() {
    return this.getDept();
  }

  getDept(){
    return this.masterService.getAllDept().subscribe((res:any) =>{
      this.deptList = res.data;
    })
  }
  saveDept(){
    this.masterService.createDept(this.newDeptList).subscribe((res:any) =>{
      if(res.result){
        alert("Department created successfully!");
        this.getDept();
      }else{
        alert(res.message);
      }
    })
  }
  onEdit(data :any){
    this.newDeptList=data;
  }
  editDept(){
    this.masterService.updateDept(this.newDeptList).subscribe((res:any) =>{
      if(res.result){
        alert("Department updated successfully!");
        this.getDept();
      }else {
        alert(res.message);
      }
    })
  }
  onDelete(id:number){
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete){
      this.masterService.deleteDept(id).subscribe((res:any) =>{
        if(res.result){
          alert("Department deleted successfully!");
          this.getDept();
        }else{
          alert(res.message);
        }
      })
    }
  }

}
