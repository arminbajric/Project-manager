import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { StatusComponent } from './components/status/status.component';
import { EditProjectsComponent } from './components/edit-projects/edit-projects.component';
import { EditWorkplaceComponent } from './components/edit-workplace/edit-workplace.component';
import { OngoingProjectsComponent } from './components/ongoing-projects/ongoing-projects.component';
import { CompletedProjectsComponent } from './components/completed-projects/completed-projects.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainAppComponent,
    NewProjectComponent,
    NewTaskComponent,
    StatusComponent,
    EditProjectsComponent,
    EditWorkplaceComponent,
    OngoingProjectsComponent,
    CompletedProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true}],
  entryComponents:[NewProjectComponent,StatusComponent,EditProjectsComponent,EditWorkplaceComponent,OngoingProjectsComponent,CompletedProjectsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
