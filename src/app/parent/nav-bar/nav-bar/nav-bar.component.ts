import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuardserviceService } from 'src/app/service/guardservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn : Observable<boolean>;
  
  constructor(private AuthServices: GuardserviceService) {
    this.isLoggedIn = AuthServices.isLoggedIn();
   }

  ngOnInit(): void {
  }
  logOutBar(){
    this.AuthServices.logout();
  }

}
