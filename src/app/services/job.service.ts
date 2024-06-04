import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job, profession } from '../models/job';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
    const savedNumOfCV = this.getLocalStorageItem('numOfCV');
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

  filterByProfessionInMain(profession: any): Observable<any> {
    return this.http.get<any>('https://localhost:7071/api/Job/FilterJobs?profession=' + profession)
  }

  updateJobList(jobs: Job[]) {
    this.ListOfJobs.next(jobs);
  }

  filterByProfessionAndArea(profession: profession, area: string): Observable<any> {
    return this.http.get<any>(`https://localhost:7071/api/Job/Filter?profession=${profession}&area=${area}`);
  }

  addCV() {
    // const currentNum = this.numOfCVSubject.value;
    // this.numOfCVSubject.next(currentNum + 1);
    // localStorage.setItem('numOfCV', currentNum.toString());
    const currentNumOfCV = this.numOfCVSubject.value + 1;
    this.numOfCVSubject.next(currentNumOfCV);
    this.setLocalStorageItem('numOfCV', currentNumOfCV.toString());
  }

 addJobToFavorite(newjob:Job): Observable<any> {
    return this.http.post('https://localhost:7071/api/Job/AddJob', newjob);
 }

  // getNumOfCVs(): number {
  //   return this.numOfCVSubject.value;
  // }

  getNumOfCVs(): Observable<number> {
    return this.numOfCVSubject.asObservable();
  }

  getFavoriteJobs():Observable<any>{
    return this.http.get<any>(`https://localhost:7071/api/Job/GetAllJobsCV`);
  }



  getLocalStorageItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  setLocalStorageItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}

