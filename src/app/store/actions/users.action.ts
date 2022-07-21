import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export const loadUsers = createAction('[Users] load Users');

export const loadUsersSuccess = createAction('[Users] Load Users success', props<{ users: UserModel[] }>());

export const loadUsersError = createAction('[Users] Load Users Error', props<{ payload: any }>());