"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var departamentos_component_1 = require("./components/departamentos.component");
var empleados_component_1 = require("./components/empleados.component");
var empleado_detalle_component_1 = require("./components/empleado-detalle.component");
var departamento_agregar_component_1 = require("./components/departamento-agregar.component");
var empleado_agregar_component_1 = require("./components/empleado-agregar.component");
var departamento_editar_component_1 = require("./components/departamento-editar.component");
var empleado_editar_component_1 = require("./components/empleado-editar.component");
var appRoutes = [
    { path: '', component: empleados_component_1.empleadosComponent },
    { path: 'empleado-detalle/:id', component: empleado_detalle_component_1.empleadoDetalleComponent },
    { path: 'empleados', component: empleados_component_1.empleadosComponent },
    { path: 'departamentos', component: departamentos_component_1.departamentosComponent },
    { path: 'departamento-agregar', component: departamento_agregar_component_1.departamentoagregarComponent },
    { path: 'empleado-agregar', component: empleado_agregar_component_1.empleadoagregarComponent },
    { path: 'departamento-editar/:id', component: departamento_editar_component_1.departamentoeditarComponent },
    { path: 'empleado-editar/:id', component: empleado_editar_component_1.empleadoeditarComponent },
    { path: '**', component: empleados_component_1.empleadosComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map