import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from "rxjs";
import { apiRequest } from "src/app/contants";
import { ManageCallsService } from "src/app/services/manage-calls.service";
import { loadUser, loadUserError, loadUserSuccess } from "../actions/user.action";

@Injectable()

export class UserEffect {
    constructor(
        private actions$: Actions,
        private mngSV: ManageCallsService,
    ) { }

    loadUser$ = createEffect(
        (): any => this.actions$.pipe(
            ofType(loadUser), //ofType operador de ngrx especial para filtrar acciones, en este caso la action loadUsers
            mergeMap(// mergeMap operador de rxjs que permite disparar un nuevo observable y mezclarlo con el observable anterior
                (action) => this.mngSV.getData(apiRequest.getUserById + action.id)
                    
                    .then(user => {
                        return loadUserSuccess({ user: user.data })
                        //catchError(err => of (loadUsersError({ payload: err })))
                    })
                    .catch(err => {
                        return loadUserError({ payload: err })
                    })

            )

        )

    );

}