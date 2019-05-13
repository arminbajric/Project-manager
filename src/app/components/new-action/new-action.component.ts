import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkCircleService } from 'src/app/services/work-circle.service';

declare var setWorkersList:Function;
declare var showSavedAction:Function;
declare var getTaskWorkers:Function;
declare var showDocumentation:Function;
@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.css']
})
export class NewActionComponent implements OnInit {
 
 
  actionGroup:FormGroup;
  actionData:FormData;
  actions:Array<string>;
  filesArray:string[];
  constructor(private workerService:WorkCircleService) { }

  ngOnInit() {
    
    setWorkersList('task-workers',getTaskWorkers());
    this.actionGroup=new FormGroup({
      title:new FormControl('',Validators.required),
      notes:new FormControl('',Validators.required),
      deadline:new FormControl('',Validators.required),
      files:new FormControl()
    })
  }
saveAction(){
showSavedAction(this.actionGroup.get('title').value);
 
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
showDocumentation('actionDocumentation',this.filesArray)

}
}
