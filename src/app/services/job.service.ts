import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../models/job';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
    const savedNumOfCV = localStorage.getItem('numOfCV');
    const initialNumOfCV = savedNumOfCV !== null ? +savedNumOfCV : 0;
    this.numOfCVSubject = new BehaviorSubject<number>(initialNumOfCV);
  }

  private ListOfJobs = new BehaviorSubject<Job[]>([]);
  ListOfJobs$ = this.ListOfJobs.asObservable();

  // private numOfCVSubject = new BehaviorSubject<number>(0);
  // numOfCV$ = this.numOfCVSubject.asObservable();
  private numOfCVSubject: BehaviorSubject<number>;



  getJobs(): Observable<any> {
    return this.http.get('https://localhost:7071/api/Job/GetAllJobs/');
  }

  filterByProfession(profession: any): Observable<any> {
    return this.http.get<any>('https://localhost:7071/api/Job/FilterJobs?profession=' + profession)
  }

  updateJobList(jobs: Job[]) {
    this.ListOfJobs.next(jobs);
  }

  addCV() {
    // const currentNum = this.numOfCVSubject.value;
    // this.numOfCVSubject.next(currentNum + 1);
    // localStorage.setItem('numOfCV', currentNum.toString());
    const currentNumOfCV = this.numOfCVSubject.value + 1;
    this.numOfCVSubject.next(currentNumOfCV);
    localStorage.setItem('numOfCV', currentNumOfCV.toString());
  }

  // getNumOfCVs(): number {
  //   return this.numOfCVSubject.value;
  // }

  getNumOfCVs(): Observable<number> {
    return this.numOfCVSubject.asObservable();
  }
}

