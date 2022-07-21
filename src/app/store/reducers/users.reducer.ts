import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/users.action';

export interface UsersState {
    users: UserModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
};

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

const _userReducer = createReducer(
    usersInitialState,
    on(loadUsers, state => ({
        ...state,
        loading: true
    })),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(loadUsersError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        user: null,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
        
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return _userReducer(state, action);
}