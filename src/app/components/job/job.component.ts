import { Component, Input } from '@angular/core';
import { Job, profession } from '../../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  @Input()
  job:Job={area:"",fromHome:false,hours:0,id:0,jobName:"",profession:profession.Accounting,requirements:""};
  
}
