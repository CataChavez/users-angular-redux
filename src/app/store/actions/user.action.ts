import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export const loadUser = createAction('[User] load User',
    props<{ id: string }>()
);

export const loadUserSuccess = createAction('[User] Load User success', props<{ user: UserModel }>());

export const loadUserError = createAction('[User] Load User Error', props<{ payload: any }>());