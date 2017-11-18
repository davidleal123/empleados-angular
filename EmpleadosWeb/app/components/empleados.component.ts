import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


import {empleadoService} from '../services/empleado.service';
import { empleado } from '../models/empleado';


@Component({
    selector: 'Empleados',
    templateUrl: 'app/views/empleados.html',
    providers: [empleadoService]
})

export class empleadosComponent implements OnInit {
    public title: string;
    public empleados: empleado[];    
    public errorMessage;
    public confirmar;
    public empleado: empleado;

    constructor(
        
                private _empleadoService: empleadoService,
                private _route: ActivatedRoute,
                private _router: Router
            ){
        this.title = 'Lista de Empleados';

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('empleadosComponent Cargado')
        this.empleado= new empleado(0,"","","","",0,"");
        this._empleadoService.getEmpleados().subscribe(
            result => {
                console.log(result);
                this.empleados= result.Empleados;

                if(!this.empleados){
                    alert('Error al traer departamentos')
                }
            },
            error =>{
                this.errorMessage = <any> error;

                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert('error en la peticion');
                }
            }
        );
    }

    onDeleteConfirm(id) {
        this.confirmar = id;
    }

    onCancelarConfirm(id) {
        this.confirmar = null;
    }

    onDeleteDepartamento(id) {
        this.confirmar = id;
        this.empleado.Clave_emp = id;
        console.log(this.empleado);
        this._empleadoService.deleteempleado(this.empleado).subscribe(
            response => {

                if (!response.message) {
                    alert('Error con el servidor');
                    console.log(response);
                } else {
                    this.empleado = response.empleado;
                    console.log('todo bien');
                    alert('empleado eliminado');
                    this._router.navigate(['/']);
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert("Error interno");
                }
            }


        );   
        
        
    }


}