import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {departamento} from '../models/departamento';

@Injectable()
export class departamentoService{
    public url: string;
    constructor(private _http: Http){
        this.url = 'http://localhost:3001/api/';
    }

    getDepartamentos(){
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url+'departamentos', options)
            .map(res => res.json());
    }

    getDepartamento(id: number){
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url+'getdepartamento/'+id, options)
            .map(res => res.json());
    }

    postDepartamento(departamento:departamento){
        let json = JSON.stringify(departamento);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url+'departamento', departamento, options)
            .map(res => res.json());
    }

    putDepartamento(departamento:departamento){
        let json = JSON.stringify(departamento);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this.url+'updatedepartamento', departamento, options)
            .map(res => res.json());
    }

    deleteDepartamento(departamento:departamento){
        let json = JSON.stringify(departamento);
        let params = json;
        console.log(params);
        let headers = new Headers({ 'Conent-Type':'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url+'deletedepartamento', departamento, options)
            .map(res => res.json());
    }

}