import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions/user.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit, OnDestroy {

  UserSubscription!: Subscription;
  user: UserModel | null = null;
  loading: boolean = false;
  error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnDestroy(): void {
    this.UserSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.UserSubscription = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    })
    this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user =  user,
      this.loading = loading;
      this.error = error;
    })
  }

}
