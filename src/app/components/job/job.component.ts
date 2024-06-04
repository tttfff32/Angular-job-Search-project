import { Component, Input } from '@angular/core';
import { Job, profession } from '../../models/job';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: '../../app.component.scss'
})
export class JobComponent {
constructor(private jobSRV:JobService, private router:Router){}
  @Input()
  job:Job={area:"",fromHome:false,hours:0,id:0,jobName:"",profession:profession.Accounting,requirements:""};
  newJob:Job={area:"",fromHome:false,hours:0,id:0,jobName:"",profession:profession.Accounting,requirements:""};
  numOfCV:number=0;
  isShowDetail:boolean=false;
  btn:string="Show Details";
  addCV(){
    this.jobSRV.addCV();
    this.newJob={area:this.job.area,fromHome:this.job.fromHome,hours:this.job.hours,id:this.job.id,jobName:this.job.jobName,profession:this.job.profession,requirements:this.job.requirements};
    this.jobSRV.addJobToFavorite(this.newJob).subscribe
    (
      response => {
        console.log(response); // פרטי התגובה מהשרת
      },
      error => {
        console.error(error); // השגיאה המתקבלת מהשרת
      }
    );
  }

  showDetails(){
    if(this.btn=="Show Details"){
      this.isShowDetail=true;
      this.btn="Close Details"
    }
    else{
      this.isShowDetail=false;
      this.btn="Show Details"
    }
  }
}
