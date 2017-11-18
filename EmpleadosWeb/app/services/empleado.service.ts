import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {empleado} from '../models/empleado';

@Injectable()
export class empleadoService{
    public url: string;
    constructor(private _http: Http){
        this.url = 'http://localhost:3001/api/';
    }

    getEmpleados(){
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url+'empleados', options)
            .map(res => res.json());
    }

    getEmpleado(id: number){
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url+'getempleado/'+id, options)
            .map(res => res.json());
    }

    postempleado(empleado:empleado){
        let json = JSON.stringify(empleado);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url+'empleado', empleado, options)
            .map(res => res.json());
    }

    putempleado(empleado:empleado){
        let json = JSON.stringify(empleado);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this.url+'updatedeempleado', empleado, options)
            .map(res => res.json());
    }

    deleteempleado(empleado:empleado){
        let json = JSON.stringify(empleado);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url+'deleteempleado', empleado, options)
            .map(res => res.json());
    }

}