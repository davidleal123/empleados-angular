import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {departamentosComponent} from './components/departamentos.component';
import {empleadosComponent} from './components/empleados.component';
import {empleadoDetalleComponent} from './components/empleado-detalle.component';
import {departamentoagregarComponent} from './components/departamento-agregar.component';
import {empleadoagregarComponent} from './components/empleado-agregar.component';
import {departamentoeditarComponent} from './components/departamento-editar.component';
import {empleadoeditarComponent} from './components/empleado-editar.component';



const appRoutes: Routes = [
    {path: '', component: empleadosComponent},
    {path: 'empleado-detalle/:id', component: empleadoDetalleComponent},  
    {path: 'empleados', component: empleadosComponent},  
    {path: 'departamentos', component: departamentosComponent},  
    {path: 'departamento-agregar', component: departamentoagregarComponent},  
    {path: 'empleado-agregar', component: empleadoagregarComponent},  
    {path: 'departamento-editar/:id', component: departamentoeditarComponent},  
    {path: 'empleado-editar/:id', component: empleadoeditarComponent},  
    
    

    {path: '**', component: empleadosComponent}
    
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);