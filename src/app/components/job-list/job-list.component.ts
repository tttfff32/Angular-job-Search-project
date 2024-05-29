import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit{

  constructor(private jobSRV:JobService){}
  ListOfJobs:Job[]=this.jobSRV.ListOfJobs;
    ngOnInit(): void {
    this.jobSRV.getJobs().subscribe(
      (data: Job []) => 
        this.jobSRV.ListOfJobs=data
    
    )
    this.ListOfJobs= this.jobSRV.ListOfJobs;
  }


}
