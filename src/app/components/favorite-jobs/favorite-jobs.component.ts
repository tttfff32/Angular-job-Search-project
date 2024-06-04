import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-favorite-jobs',
  templateUrl: './favorite-jobs.component.html',
  styleUrl: '../../app.component.scss'
})
export class FavoriteJobsComponent implements OnInit{
  constructor(private jobSRV:JobService){}
  FavoriteJobList:Job [] = [];
  ngOnInit(): void {
    this.jobSRV.getFavoriteJobs().subscribe(res => this.FavoriteJobList = res)
  }


}
