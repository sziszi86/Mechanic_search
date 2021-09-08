import {Component, OnInit, Injectable, ViewChild, ChangeDetectorRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myControl = new FormControl();
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
  number: number;
  name: any = '';
  results = '';
  user: any;
  nev = '';
  filteredOptions: Observable<string[]>;

  constructor(private userService: UserService, private changeDetectorRef: ChangeDetectorRef) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
    );
    this.userService.getUsers()
      .subscribe((data) => {
          this.users = data.results;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  private _filter(value: string, ): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    return this.users.filter(user => user.location.city.toLowerCase().includes(filterValue));
  }
}
