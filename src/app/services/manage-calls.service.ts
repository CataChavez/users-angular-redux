import { Injectable } from '@angular/core';
import { CallService } from './call.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ManageCallsService {

  constructor(
    private utSv: UtilService,
    private serviceCaller: CallService,
  ) { }


  public getData(serviceUrl: string): Promise<any>{
    return this.utSv.returnObservableResponse(this.serviceCaller.get(serviceUrl));
  }

  public posData(serviceUrl: string, object: any): Promise<any>{
    return this.utSv.returnObservableResponse(this.serviceCaller.post(serviceUrl, object));
  }

  public deleteData(serviceUrl: string): Promise<any> {
    return this.utSv.returnObservableResponse(this.serviceCaller.delete(serviceUrl));
  }

}
