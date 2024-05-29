import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Job, profession } from '../../models/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  constructor(private userSRV: UserService, private jobSRV: JobService, private router: Router) { }
  str: string | null = "" || null;
  user: User = { userName: "", password: "", id: 0, profession: profession.Accounting };
  userInLocalStorage: boolean = this.userSRV.userInLocalStorage
  filterData: any = { area: "", fromHome: false, hours: 0, id: 0, jobName: "", profession: profession.Accounting, requirements: "" };

  @Output()
  filterChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.str = localStorage.getItem('myUser') || null;
    if (this.str != null) {
      this.user = JSON.parse(this.str);
      this.userSRV.userInLocalStorage = true;
    }
  }

  ListOfJobs:Job[]=this.jobSRV.ListOfJobs;
  filter(){
    this.jobSRV.filterByProfession(this.user.profession).subscribe(res => this.jobSRV.ListOfJobs = res);
  }

}
