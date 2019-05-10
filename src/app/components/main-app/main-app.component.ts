import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';
import { StatusComponent } from '../status/status.component';
import { EditProjectsComponent } from '../edit-projects/edit-projects.component';
import { EditWorkplaceComponent } from '../edit-workplace/edit-workplace.component';
import { OngoingProjectsComponent } from '../ongoing-projects/ongoing-projects.component';
import { CompletedProjectsComponent } from '../completed-projects/completed-projects.component';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
@ViewChild('main',{read:ViewContainerRef}) mainBlock:ViewContainerRef;
  constructor(private viewContainerRef:ViewContainerRef,private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
    const block=this.resolver.resolveComponentFactory(StatusComponent);
    const ref=this.mainBlock.createComponent(block);
    ref.changeDetectorRef.detectChanges();
  }
 
addNewProject(){
  this.mainBlock.clear();
  const block=this.resolver.resolveComponentFactory(NewProjectComponent);
  const ref=this.mainBlock.createComponent(block);
  ref.changeDetectorRef.detectChanges();
}
manageProjects(){
this.mainBlock.clear();
const block=this.resolver.resolveComponentFactory(EditProjectsComponent);
const ref=this.mainBlock.createComponent(block);
ref.changeDetectorRef.detectChanges();
}
manageWorkplace(){
  this.mainBlock.clear();
  const block=this.resolver.resolveComponentFactory(EditWorkplaceComponent);
  const ref=this.mainBlock.createComponent(block);
  ref.changeDetectorRef.detectChanges();
}
ongoingProjects(){
  this.mainBlock.clear();
  const block=this.resolver.resolveComponentFactory(OngoingProjectsComponent);
  const ref=this.mainBlock.createComponent(block);
  ref.changeDetectorRef.detectChanges();
}
finishedProjects(){
  this.mainBlock.clear();
  const block=this.resolver.resolveComponentFactory(CompletedProjectsComponent);
  const ref=this.mainBlock.createComponent(block);
  ref.changeDetectorRef.detectChanges();
}
}
