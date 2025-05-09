import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';

@Component({
  selector: 'app-child-category',
  imports: [],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css'
})
export class ChildCategoryComponent implements OnInit {

  gridList: any[] = [];
  parentCList: any[] = [];
  newChild: any = {
    "childCategoryId": 0,
    "categoryName": "",
    "parentCategoryId": 0
  }
  masterService = inject(MasterService);

  ngOnInit() {
    this.getChild();
    this.getParent();
  }
  getParent(){
    return this.masterService.getPCategory().subscribe((res :any) => {
      this.parentCList = res.data;
    })
  }

  getChild() {
    return this.masterService.getCCategory().subscribe((res: any) => {
      this.newChild = res.data;
    })
  }

  saveChild() {
    return this.masterService.createCCategory(this.newChild).subscribe((res: any) => {
      if (res.result) {
        alert("Child Category Successfully created");
        this.getChild();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(data: any) {
    this.newChild = data;
  }

  editChild() {
    this.masterService.updateCCategory(this.newChild).subscribe((res: any) => {
      if (res.result) {
        alert("Child Category updated successfully!");
        this.getChild();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.masterService.deleteCCategory(id).subscribe((res: any) => {
        if (res.result) {
          alert("Child Category deleted successfully!");
          this.getChild();
        } else {
          alert(res.message);
        }
      })
    }
  }
}
