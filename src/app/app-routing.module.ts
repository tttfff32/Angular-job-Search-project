import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { JobListComponent } from './components/job-list/job-list.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/:numOfCV', component: MainComponent },
  { path: 'jobs', component: JobListComponent },
  // { path: '', redirectTo: '/main/0', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
