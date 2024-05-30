import { Component, Input } from '@angular/core';
import { Job, profession } from '../../models/job';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
constructor(private jobSRV:JobService, private router:Router){}
  @Input()
  job:Job={area:"",fromHome:false,hours:0,id:0,jobName:"",profession:profession.Accounting,requirements:""};
  numOfCV:number=0;
  addCV(){
    this.jobSRV.addCV();
    const numOfCVs = this.jobSRV.getNumOfCVs();
    this.router.navigate(['/main'], { queryParams: { numOfCVs: numOfCVs } });

  }
}
