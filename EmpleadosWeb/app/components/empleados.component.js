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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var empleado_service_1 = require("../services/empleado.service");
var empleado_1 = require("../models/empleado");
var empleadosComponent = (function () {
    function empleadosComponent(_empleadoService, _route, _router) {
        this._empleadoService = _empleadoService;
        this._route = _route;
        this._router = _router;
        this.title = 'Lista de Empleados';
    }
    empleadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('empleadosComponent Cargado');
        this.empleado = new empleado_1.empleado(0, "", "", "", "", 0, "");
        this._empleadoService.getEmpleados().subscribe(function (result) {
            console.log(result);
            _this.empleados = result.Empleados;
            if (!_this.empleados) {
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
    empleadosComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmar = id;
    };
    empleadosComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmar = null;
    };
    empleadosComponent.prototype.onDeleteDepartamento = function (id) {
        var _this = this;
        this.confirmar = id;
        this.empleado.Clave_emp = id;
        console.log(this.empleado);
        this._empleadoService.deleteempleado(this.empleado).subscribe(function (response) {
            if (!response.message) {
                alert('Error con el servidor');
                console.log(response);
            }
            else {
                _this.empleado = response.empleado;
                console.log('todo bien');
                alert('empleado eliminado');
                _this._router.navigate(['/']);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error interno");
            }
        });
    };
    return empleadosComponent;
}());
empleadosComponent = __decorate([
    core_1.Component({
        selector: 'Empleados',
        templateUrl: 'app/views/empleados.html',
        providers: [empleado_service_1.empleadoService]
    }),
    __metadata("design:paramtypes", [empleado_service_1.empleadoService,
        router_1.ActivatedRoute,
        router_1.Router])
], empleadosComponent);
exports.empleadosComponent = empleadosComponent;
//# sourceMappingURL=empleados.component.js.map