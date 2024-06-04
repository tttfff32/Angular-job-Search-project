import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { JobComponent } from './components/job/job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { MyJobDirectiveDirective } from './my-job-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobComponent,
    JobListComponent,
    FilterComponent,
    FavoriteJobsComponent,
    MyJobDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
