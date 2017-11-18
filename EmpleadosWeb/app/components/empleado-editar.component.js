"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar Component desde el núcleo de Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var empleado_service_1 = require("../services/empleado.service");
var empleado_1 = require("../models/empleado");
var departamento_service_1 = require("../services/departamento.service");
var departamento_1 = require("../models/departamento");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var empleadoeditarComponent = (function () {
    function empleadoeditarComponent(_empleadoService, _departamentoService, _route, _router) {
        this._empleadoService = _empleadoService;
        this._departamentoService = _departamentoService;
        this._route = _route;
        this._router = _router;
    }
    empleadoeditarComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.empleado = new empleado_1.empleado(0, "", "", "", "", 0, "");
        this.getempleado();
        this.departamento = new departamento_1.departamento(0, "");
        console.log('departamentosComponent Cargado');
        this.getDepartamentos();
    };
    empleadoeditarComponent.prototype.getempleado = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            console.log(id);
            _this._empleadoService.getEmpleado(id).subscribe(function (response) {
                if (!_this.empleado) {
                    console.log('error al cargar empleado');
                    _this._router.navigate(['/empleados']);
                }
                else {
                    _this.empleado = response;
                    console.log(_this.empleado);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert('error en la peticion');
                }
            });
        });
    };
    empleadoeditarComponent.prototype.getDepartamentos = function () {
        var _this = this;
        this._departamentoService.getDepartamentos().subscribe(function (result) {
            console.log(result);
            _this.departamentos = result.Departamentos;
            if (!_this.departamentos) {
                alert('Error al traer departamentos');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('error en la peticion');
            }
        });
    };
    empleadoeditarComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.empleado) {
            console.log('campos vacios');
            alert('No puede meter datos vacios');
        }
        else {
            console.log(this.empleado);
            this._empleadoService.putempleado(this.empleado).subscribe(function (response) {
                console.log(_this.empleado);
                if (!response.message) {
                    alert('Error con el servidor');
                    console.log(response.empleado);
                }
                else {
                    _this.empleado = response.departamento;
                    console.log('todo bien');
                    _this._router.navigate(['/empleados']);
                    alert('empleado actualizado');
                    console.log(_this.empleado);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert('error en la peticion');
                }
            });
        }
    };
    return empleadoeditarComponent;
}());
empleadoeditarComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/views/empleado-editar.html',
        providers: [empleado_service_1.empleadoService, departamento_service_1.departamentoService]
    })
    // Clase del componente donde irán los datos y funcionalidades
    ,
    __metadata("design:paramtypes", [empleado_service_1.empleadoService,
        departamento_service_1.departamentoService,
        router_1.ActivatedRoute,
        router_1.Router])
], empleadoeditarComponent);
exports.empleadoeditarComponent = empleadoeditarComponent;
//# sourceMappingURL=empleado-editar.component.js.map