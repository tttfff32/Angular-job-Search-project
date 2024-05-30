import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {

  constructor(private jobSRV: JobService) {

  }
  ListOfJobs: Job[] = []
  ngOnInit(): void {
    this.jobSRV.ListOfJobs$.subscribe(
      (data: Job[]) => {
        this.ListOfJobs = data

      }
    )
    this.jobSRV.getJobs().subscribe(
      (data: Job[]) => {
        this.jobSRV.updateJobList(data);
      }
    );
  }

}
