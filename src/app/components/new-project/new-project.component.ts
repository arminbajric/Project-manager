import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { WorkCircleService } from 'src/app/services/work-circle.service';


declare var showDocumentation:Function;
declare var getProjectWorkers: Function;
declare var loadAutoCompleteScript: Function;
declare var removeAutoCompleteScript: Function;
declare var setWorkersList: Function;

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],

})
export class NewProjectComponent implements OnInit, OnDestroy, AfterViewInit {

  projectWorkers = [];
  workersList: any;
  filesArray: string[];
  constructor(private workerService: WorkCircleService) { }

  ngOnInit() {
    loadAutoCompleteScript();

    this.workersList = this.workerService.getWorkCircleEmployees();

  }
  ngAfterViewInit(): void {
    setWorkersList('workers', this.workersList)

  }
  ngOnDestroy() {
    removeAutoCompleteScript();
  }


  saveProject() {
    this.projectWorkers = getProjectWorkers();
  }
  onFileChanged(event) {

    this.filesArray=new Array();
  
   if(event.target.files && event.target.files.length > 0) {
     let files = event.target.files;
     
     for(let i=0;i<files.length;i++){
     let reader = new FileReader();
     let file=event.target.files[i];
     reader.readAsDataURL(file);
     reader.onload = () => {
      
       const value:String=reader.result.toString();
       
       return file.name
     }
     this.filesArray[i]=file.name;
   }
   console.log(this.filesArray.length)
   
 }
 showDocumentation('projectDocumentation',this.filesArray)
 
 }
}
