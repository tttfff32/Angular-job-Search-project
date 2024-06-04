import { Component, OnInit } from '@angular/core';
import { profession } from '../../models/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: '../../app.component.scss'
})
export class FilterComponent  implements OnInit {
  form:FormGroup;
  constructor(private jobSRV: JobService, private router: Router) { 
    this.form = new FormGroup(
      {
        area: new FormControl('', Validators.required),
        profession:new FormControl('', Validators.required)
      }
    )
  }

  ngOnInit(): void { }

  filterJobs() {
    if (this.form.value.profession && this.form.value.area) {
      this.jobSRV.filterByProfessionAndArea(this.form.value.profession,this.form.value.area).subscribe(res=>this.jobSRV.updateJobList(res) );
  }
}
  resetFilter() {
    this.jobSRV.getJobs().subscribe(res=> this.jobSRV.updateJobList(res));
  }
  
}
