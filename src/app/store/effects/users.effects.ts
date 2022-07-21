import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from "rxjs";
import { apiRequest } from "src/app/contants";
import { ManageCallsService } from "src/app/services/manage-calls.service";
import { loadUsers, loadUsersError, loadUsersSuccess } from "../actions/users.action";

@Injectable()

export class UsersEffect {
    constructor(
        private actions$: Actions,
        private mngSV: ManageCallsService,
    ) { }

    loadUsers$ = createEffect(
        (): any => this.actions$.pipe(
            ofType(loadUsers), //ofType operador de ngrx especial para filtrar acciones, en este caso la action loadUsers
            mergeMap(// mergeMap operador de rxjs que permite disparar un nuevo observable y mezclarlo con el observable anterior
                () => this.mngSV.getData(apiRequest.getUserList)
                    .then(data => {
                        return loadUsersSuccess({ users: [ ...data.data ] })
                        //catchError(err => of (loadUsersError({ payload: err })))
                    } )
                    .catch(err => {
                        return loadUsersError({ payload: err })
                    })

            )

        ) 

    );

}