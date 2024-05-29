import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  ListOfJobs:Job[]=[];

  getJobs():Observable<any>{   
    return this.http.get('https://localhost:7071/api/Job/GetAllJobs/');
}

filterByProfession(profession:any): Observable< any>{
    return this.http.get<any>('https://localhost:7071/api/Job/FilterJobs?profession=' + profession)   
  }

}
