import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { apiRequest } from 'src/app/contants';
import { UserModel } from 'src/app/models/user.model';
import { CallService } from 'src/app/services/call.service';
import { ManageCallsService } from 'src/app/services/manage-calls.service';
import { loadUsers } from 'src/app/store/actions/users.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: []
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    })
  }



}
