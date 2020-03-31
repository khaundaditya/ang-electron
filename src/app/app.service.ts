import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

//import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
//import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {

    constructor(private _electronService: ElectronService ) {}

    launchWindow() {
        if(this._electronService.isElectronApp) {
        //console.log('Is eletronApp: ' + this._electronService.isElectronApp + ' Type of Shell: ' + typeof this._electronService.shell );
        this._electronService.shell.openExternal('https://google.com');
          //let pong: string = this._electronService.ipcRenderer.sendSync('ping');
          //console.log(pong);
        }
    }
}
