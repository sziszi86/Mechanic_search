import {Component, OnInit, Injectable, ViewChild, ChangeDetectorRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from "./user.service";
import {Observable} from 'rxjs';
import {MatPaginatorModule} from '@angular/material/paginator';

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
  phone: string;
  email: any = '';
  city: string;
  picture: any;
  medium: any;
  location: any = '';
  street: string;
  CityName: any;
  number: number;
  name: any = '';
  results = '';
  user: any;
  longText = 'Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur. Erat enim res aperta. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Quid enim de amicitia statueris utilitatis causa expetenda vides. Ait enim se, si uratur, Quam hoc suave! dicturum.'

  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  obs: Observable<any>;
  value: string;

  constructor(private userService: UserService, private changeDetectorRef: ChangeDetectorRef) {
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
