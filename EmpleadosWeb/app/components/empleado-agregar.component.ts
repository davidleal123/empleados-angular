// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {empleadoService} from '../services/empleado.service';
import {empleado} from '../models/empleado';
import { departamentoService } from '../services/departamento.service';
import { departamento } from '../models/departamento';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
   selector: 'my-app',
   templateUrl: 'app/views/empleado-agregar.html',
   providers: [empleadoService,departamentoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class empleadoagregarComponent implements OnInit{
    public empleado: empleado;
    public departamentos: departamento[];
    public errorMessage;
    public departamento: departamento;

    constructor(
        private _empleadoService: empleadoService,
        private _departamentoService: departamentoService,        
        private _route: ActivatedRoute,
        private _router: Router
    ){
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.empleado = new empleado(0,"","","","",0,"");
        console.log(this.empleado);
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

    doSomething(){
        console.log("hizo algo")
    }
    public onSubmit(){
        if(!this.empleado){            
            console.log('campos vacios');
            alert('No puede meter datos vacios');}
            else{
                console.log(this.empleado);
                this._empleadoService.postempleado(this.empleado).subscribe(
                    response => {
                        console.log(this.empleado);
                        
                        if(!response.message){
                            alert('Error con el servidor');
                            console.log(response.empleado);
                        }else{
                            this.empleado = response.empleado;
                            console.log('todo bien');
                            this._router.navigate(['/empleados']);
                            alert('empleado dado de alta');                
                            console.log(this.empleado);  
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
    }
 }