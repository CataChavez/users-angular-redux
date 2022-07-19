import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
* Retorna una PROMESA con la respuesta de un objeto observable.
* @param OBS Observable con la respuesta a obtener.
*/
  public returnObservableResponse(OBS: Observable<any>): Promise<any> {
    // tslint:disable-next-line: only-arrow-functions
    return new Promise((resolve, reject) => {
      if (OBS !== null && OBS !== undefined) {
        OBS.subscribe(
          (response: any) => {
            resolve(response);
          },
          (error: any) => {
            if ((error.error)) {
              reject(error);
            } else {
              reject(error);
            }
          }
        );
      } else {
        reject(null);
      }
    });
  }
}
