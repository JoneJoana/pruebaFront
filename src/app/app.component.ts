import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN, ROL, ROL_ADMIN } from './Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaFront';

  isLogin = true;
  logAdmin = false;

  constructor( private router: Router) {}

  ngOnInit(): void {
    if(window.sessionStorage.getItem(TOKEN)){
      console.log("logged in")
      this.isLogin = true
      if(window.sessionStorage.getItem(ROL) == ROL_ADMIN){
        console.log("isAdmin")
        this.logAdmin = true
      }
    }

  }

  logout(): void{
    window.sessionStorage.clear()
    this.isLogin = false;
    this.logAdmin = false;
    this.router.navigate(['/home']);
  }

}
