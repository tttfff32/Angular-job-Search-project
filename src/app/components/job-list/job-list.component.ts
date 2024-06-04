import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job, profession } from '../../models/job';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {

  constructor(private jobSRV: JobService,private router:ActivatedRoute) {

  }
  ListOfJobs: Job[] = []
  fullJobList: Job[] = [];

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
  