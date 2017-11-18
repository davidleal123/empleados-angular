// Importar Component desde el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { departamentoService } from '../services/departamento.service';
import { departamento } from '../models/departamento';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/departamento-editar.html',
    providers: [departamentoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class departamentoeditarComponent implements OnInit {
    public departamento: departamento;
    public errorMessage: String;

    constructor(
        private _departamentoService: departamentoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.departamento = new departamento(0, "");
        this.getDepartamento();

    }
    getDepartamento() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._departamentoService.getDepartamento(id).subscribe(
                response => {
                    if (!this.departamento) {
                        console.log('error al cargar Departamento')
                        this._router.navigate(['/departamentos']);
                    }
                    else{
                        this.departamento = response.Departamento;                        
                        console.log(this.departamento);
                    }
                },
                error => {
                    this.errorMessage = <any>error;
 
                    if (this.errorMessage != null) {
                        console.log(this.errorMessage);
                        alert('error en la peticion');
                    }
                }
            )
        });
    }

    public onSubmit() {
        if (!this.departamento.descripcion) {
            console.log('campos vacios');
            alert('No puede meter datos vacios');
        }
        else {
            console.log(this.departamento);
            this._departamentoService.putDepartamento(this.departamento).subscribe(
                response => {
                    console.log(this.departamento);

                    if (!response.message) {
                        alert('Error con el servidor');
                        console.log(response.departamento);
                    } else {
                        this.departamento = response.departamento;
                        console.log('todo bien');
                        this._router.navigate(['/departamentos']);
                        alert('Departamento actualizado');
                        console.log(this.departamento);
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
    }
}