import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {empleadoService} from '../services/empleado.service';
import {empleado } from '../models/empleado';

@Component ({
    selector: 'empleado-detalle',
    templateUrl: 'app/views/empleado-detalle.html',
    providers: [empleadoService]
})

export class empleadoDetalleComponent implements OnInit {

    public Empleado: empleado;
    public errorMessage;

    constructor (
        private _EmpleadoService: empleadoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}
    
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getEmpleado();
    }

    getEmpleado(){
        this._route.params.forEach((params: Params) => {
           let id = params['id']; 

           this._EmpleadoService.getEmpleado(id).subscribe(
               response => {
                    this.Empleado = response.Empleado;
                    if(!this.Empleado){
                        console.log('error al cargar empleado')
                        this._router.navigate(['/']);
                    }
               },
               error =>{
                this.errorMessage = <any> error;

                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert('error en la peticion');
                }
            }
           )
        });
    }
}