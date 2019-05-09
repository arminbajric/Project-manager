import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
@ViewChild('main',{read:ViewContainerRef}) mainBlock:ViewContainerRef;
  constructor(private viewContainerRef:ViewContainerRef,private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }
 
addNewProject(){
  this.mainBlock.clear();
  const block=this.resolver.resolveComponentFactory(NewProjectComponent);
  const ref=this.mainBlock.createComponent(block);
  ref.changeDetectorRef.detectChanges();
}
}
