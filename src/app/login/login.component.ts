import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN, USERNAME } from '../Constants';
import { AuthService } from '../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = '';

  isLogin: boolean = false;

  form: any = {
    username: null,
    password: null
  }
  username?: string;
  password?: string;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem(TOKEN))
      this.router.navigate(['/login']); //o a home?
  }

  onSubmit(): void{

    this.getToken();
    const data = {
      username: this.form.username,
      password: this.form.password,
      request_token: this.token
    };

    this.authService.login(data)
      .subscribe(
        response => {
          this.token = response;
          console.log(this.token);
          window.sessionStorage.setItem(TOKEN, response.request_token);
          window.sessionStorage.setItem(USERNAME, this.form.username);
          this.isLogin = true;
        },
        error => {
          // gestionar error
          console.log(error)
        });
    this.router.navigate(['/home']);
  }

  getToken() {
    this.authService.getToken()
    .subscribe(
      response => {
        this.token = response.request_token;
        console.log(this.token)
      },
      error => {
        console.log(error.message);
      }
    );
  }

}

