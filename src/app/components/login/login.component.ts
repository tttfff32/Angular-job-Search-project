import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { profession } from '../../models/job';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup
  constructor(private userSRV: UserService,private router:Router) {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        password: new FormControl('', [Validators.minLength(4),Validators.required]),
        profession:new FormControl('', Validators.required)
      }
    )
  }
  userInLocalStorage: boolean = this.userSRV.userInLocalStorage;
  user: User = { userName: "", password: "", id: 0, profession: profession.Accounting};
  signUp() {
    this.userSRV.checkUser(this.form.value.username, this.form.value.password).subscribe(
      (data: User) => {
        this.user = data;
        if (this.user == null) {
          this.form.reset();
          alert("you are not exist in our system⛔");

        }
        else {
          this.user.profession = this.form.value.profession as profession;
          this.userSRV.setLocalStorageItem("myUser", JSON.stringify(this.user));
          this.processLogin();
        }
      },
      (error) => {
        console.error('Error retrieving users:', error);
        alert('Failed to retrieve users. Please try again later.');
      }
    );
  }

  processLogin() {
    this.userSRV.userInLocalStorage = true;
    alert('Login successful!!!✅');
    this.router.navigate(['jobs']);
  }
}
