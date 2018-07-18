import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  remove(): void {
    this.usersvc.remove(this.user)
      .subscribe(resp => {
        console.log("Remove:", resp);
      });
  }

  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.get(5)
      .subscribe(resp => {
        this.user = resp;
        console.log(resp);
      })
  }

}
  