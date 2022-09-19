import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaFront';

  isLogin = false;

  constructor( private router: Router) {}

  ngOnInit(): void {
    console.log(window.sessionStorage.getItem(TOKEN))
    if(window.sessionStorage.getItem(TOKEN)){
      console.log("logged in")
      this.isLogin = true
    }

  }

  logout(): void{
    window.sessionStorage.clear()
    this.isLogin = false;
    this.router.navigate(['/home']);
  }

}
