import { Component, OnInit } from '@angular/core';
import { WorkCircleService } from 'src/app/services/work-circle.service';
declare var fillDataList:Function;
@Component({
  selector: 'app-edit-workplace',
  templateUrl: './edit-workplace.component.html',
  styleUrls: ['./edit-workplace.component.css']
})
export class EditWorkplaceComponent implements OnInit {
workCircle:any;
  constructor(private workService:WorkCircleService) { }

  ngOnInit()  {
    fillDataList('workers',this.workService.getAllWorkers());
    this.workCircle=this.workService.getWorkCircleEmployees();
  }
  addPeopleToWorkCircle(people){

  }
  skillsSettings(){}
  roleSettings(){}
}
