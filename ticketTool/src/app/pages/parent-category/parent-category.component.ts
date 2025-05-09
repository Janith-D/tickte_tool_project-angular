import {Component, inject, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MasterService} from '../../services/master.service';

@Component({
  selector: 'app-parent-category',
  imports: [FormsModule],
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css'
})
export class ParentCategoryComponent implements OnInit {

  gridtList:any[] = [];
  deptList:any[] = [];
  newObj :any ={
    "categoryId":0,
    "categoryName":"",
    "departmentId":0,
  }

  masterService = inject(MasterService);
  ngOnInit() {
     this.get();
     this.getAllDeptList();
  }
  getAllDeptList(){
    return this.masterService.getAllDept().subscribe((res:any) => {
      this.deptList=res.data;
    })
  }

  get(){
    return this.masterService.getPCategory().subscribe((res:any) =>{
      this.gridtList = res.data;
    })
  }
  save(){
    this.masterService.createPCategory(this.newObj).subscribe((res:any) =>{
      if(res.result){
        alert("Department created successfully!");
        this.get();
      }else{
        alert(res.message);
      }
    })
  }
  onEdit(data :any){
    this.newObj=data;
  }
  edit(){
    this.masterService.updatePCategory(this.newObj).subscribe((res:any) =>{
      if(res.result){
        alert("Parent Category updated successfully!");
        this.get();
      }else {
        alert(res.message);
      }
    })
  }
  onDelete(id:number){
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete){
      this.masterService.deletePCategory(id).subscribe((res:any) =>{
        if(res.result){
          alert("Parent Category deleted successfully!");
          this.get();
        }else{
          alert(res.message);
        }
      })
    }
  }

}


