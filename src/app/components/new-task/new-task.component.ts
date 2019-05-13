import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { NewActionComponent } from '../new-action/new-action.component';
import { TaskService } from 'src/app/services/task.service';
declare var setWorkersList: Function;
declare var showDocumentation:Function;
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  entryComponents: [NewActionComponent],

})
export class NewTaskComponent implements OnInit {
  @Input() actionButton: string;
  @ViewChild('action', { read: ViewContainerRef }) block: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private taskService: TaskService) { }
filesArray: string[];
workersList:any;
  ngOnInit() {
    this.workersList=this.taskService.getProjectWorkers();
    setWorkersList('project-workers', this.workersList);
    this.actionButton = 'Attach action';
  }
  attachAction() {
    if (this.actionButton == 'Attach action') {
      const newBlock = this.resolver.resolveComponentFactory(NewActionComponent);
      const ref = this.block.createComponent(newBlock);
      ref.changeDetectorRef.detectChanges();
      this.actionButton = 'Detach form';
    }

    else {
      this.block.clear();
      this.actionButton = 'Attach action';
    }
  }
  saveTask() { }

  clearActionBlock() {
    this.block.clear();
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
 showDocumentation('taskDocumentation',this.filesArray)
 
 }
}
