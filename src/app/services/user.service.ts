import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { profession } from '../models/job';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor( private http:HttpClient) {

  }

 userInLocalStorage:boolean=false;
 

  checkUser(userName:string,password:string):Observable<any>{   
    return this.http.get(`https://localhost:7071/api/User/${userName}/${password}`);
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
