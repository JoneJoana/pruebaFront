import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './Constants';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //@ViewChild(LoginComponent) login:any;

  title = 'pruebaFront';

  isLogin: boolean = false;

  constructor( private router: Router) {}

  ngOnInit(): void {
    console.log(window.sessionStorage.getItem(TOKEN))
    if(window.sessionStorage.getItem(TOKEN)){
      console.log("logged in")
      this.isLogin = true
    }
  }

  /* ngAfterViewInit() {
    this.isLogin = this.login.isLogin;
  } */

  logout(): void{
    window.sessionStorage.clear()
    this.isLogin = false;
    this.router.navigate(['/home']);
  }

  showLogout(){
    this.isLogin = true;
  }

}
