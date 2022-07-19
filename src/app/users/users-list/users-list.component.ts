import { Component, OnInit } from '@angular/core';
import { apiRequest } from 'src/app/contants';
import { UserModel } from 'src/app/models/user.model';
import { CallService } from 'src/app/services/call.service';
import { ManageCallsService } from 'src/app/services/manage-calls.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: []
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    private mngSV: ManageCallsService,
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.mngSV.getData(apiRequest.getUserList)
      .then(resp => {
        if (resp !== null) {
          console.log(resp.data)
          this.users = resp.data
        }
      })
    .catch(err => console.log(err))
  }
}
