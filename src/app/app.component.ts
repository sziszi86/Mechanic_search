import {Component, OnInit, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  httpClient: any;
  last: string;
  cityName = '';
  phone: string;
  email: any = '';

  name: any = '';
  results = '';
  user: any;
  nev = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data) => {
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
