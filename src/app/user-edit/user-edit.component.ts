import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  change(): void {
    console.log(this.user);
    this.usersvc.change(this.user)
      .subscribe(resp => {
        console.log(resp)
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
