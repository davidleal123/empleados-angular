import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';

import { departamentoService } from '../services/departamento.service';
import { departamento } from '../models/departamento';


@Component({
    selector: 'Departamentos',
    templateUrl: 'app/views/departamentos.html',
    providers: [departamentoService]
})

export class departamentosComponent implements OnInit {
    public title: string;
    public departamentos: departamento[];
    public errorMessage;
    public departamento: departamento;

    public confirmar;
    constructor(

        private _departamentoService: departamentoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = 'Lista de deptos';
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.departamento = new departamento(0, "");

        console.log('departamentosComponent Cargado')
        this.getDepartamentos();

    }

    getDepartamentos() {
        this._departamentoService.getDepartamentos().subscribe(
            result => {
                console.log(result);
                this.departamentos = result.Departamentos;

                if (!this.departamentos) {
                    alert('Error al traer departamentos')
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage != null) {
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
        this.departamento.puesto = id;
        this._departamentoService.deleteDepartamento(this.departamento).subscribe(
            response => {

                if (!response.message) {
                    alert('Error con el servidor');
                    console.log(response);
                } else {
                    this.departamento = response.departamento;
                    console.log('todo bien');
                    alert('Departamento eliminado');
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