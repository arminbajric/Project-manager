import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NewMettingComponent } from '../new-metting/new-metting.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
@ViewChild('manage',{read:ViewContainerRef}) block:ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
newMeeting(){
  this.block.clear();
  const newBlock=this.resolver.resolveComponentFactory(NewMettingComponent);
  const ref=this.block.createComponent(newBlock);
  ref.changeDetectorRef.detectChanges();
}
newTask(){
  this.block.clear();
  const newBlock=this.resolver.resolveComponentFactory(NewTaskComponent);
  const ref=this.block.createComponent(newBlock);
  ref.changeDetectorRef.detectChanges();
}
}
