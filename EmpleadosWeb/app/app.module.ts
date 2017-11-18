import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders } from './app.routing'

import { AppComponent }  from './app.component';
import {departamentosComponent} from './components/departamentos.component';
import {empleadosComponent} from './components/empleados.component';
import {empleadoDetalleComponent} from './components/empleado-detalle.component';
import { empleadoagregarComponent} from './components/empleado-agregar.component';
import {departamentoagregarComponent } from './components/departamento-agregar.component';
import {departamentoeditarComponent} from './components/departamento-editar.component';
import {empleadoeditarComponent} from './components/empleado-editar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing],

  declarations: [ AppComponent,departamentosComponent, 
                  empleadosComponent,
                  empleadoDetalleComponent,
                  departamentoagregarComponent,
                departamentoeditarComponent,
              empleadoagregarComponent,
            empleadoeditarComponent ],

  providers: [appRoutingProviders], 

  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }