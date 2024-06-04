import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Job, profession } from '../../models/job';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


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

  // numOfCV: number =0;
  numOfCV$: Observable<number> | undefined;
  
  ngOnInit(): void {
   this.str=this.userSRV.getLocalStorageItem('myUser');
    if (this.str != null) {
      this.user = JSON.parse(this.str);
      this.userSRV.userInLocalStorage = true;
      this.router.navigate(['jobs']);
    }
    else{
      this.router.navigate(['Login']);
    }
    this.numOfCV$ = this.jobSRV.getNumOfCVs();
    // this.router.queryParams.subscribe(params => {
    //   this.numOfCV = +params['numOfCVs'] || 0;
    // });
  }

filter(){
  this.jobSRV.filterByProfessionInMain(this.user.profession).subscribe(res => this.jobSRV.updateJobList(res));
}
}
