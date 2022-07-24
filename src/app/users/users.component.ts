import { UserService } from './../user.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  pageTitle = 'Users List';
  errorMessage = '';
  users: IUser[] = [];
  userFilter = "";
  
  constructor(private userService: UserService) { }
  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
      })
  }
}
