"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var departamentos_component_1 = require("./components/departamentos.component");
var empleados_component_1 = require("./components/empleados.component");
var empleado_detalle_component_1 = require("./components/empleado-detalle.component");
var empleado_agregar_component_1 = require("./components/empleado-agregar.component");
var departamento_agregar_component_1 = require("./components/departamento-agregar.component");
var departamento_editar_component_1 = require("./components/departamento-editar.component");
var empleado_editar_component_1 = require("./components/empleado-editar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, departamentos_component_1.departamentosComponent,
            empleados_component_1.empleadosComponent,
            empleado_detalle_component_1.empleadoDetalleComponent,
            departamento_agregar_component_1.departamentoagregarComponent,
            departamento_editar_component_1.departamentoeditarComponent,
            empleado_agregar_component_1.empleadoagregarComponent,
            empleado_editar_component_1.empleadoeditarComponent],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map