import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/:numOfCV', component: MainComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'filter', component: FilterComponent },
  {path: 'FavoriteJobs', component: FavoriteJobsComponent},
  {path: 'Login', component: LoginComponent}

  // { path: '', redirectTo: '/main/0', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
