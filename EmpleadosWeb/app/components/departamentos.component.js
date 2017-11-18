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
var departamento_service_1 = require("../services/departamento.service");
var departamento_1 = require("../models/departamento");
var departamentosComponent = (function () {
    function departamentosComponent(_departamentoService, _route, _router) {
        this._departamentoService = _departamentoService;
        this._route = _route;
        this._router = _router;
        this.title = 'Lista de deptos';
    }
    departamentosComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.departamento = new departamento_1.departamento(0, "");
        console.log('departamentosComponent Cargado');
        this.getDepartamentos();
    };
    departamentosComponent.prototype.getDepartamentos = function () {
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
    departamentosComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmar = id;
    };
    departamentosComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmar = null;
    };
    departamentosComponent.prototype.onDeleteDepartamento = function (id) {
        var _this = this;
        this.confirmar = id;
        this.departamento.puesto = id;
        this._departamentoService.deleteDepartamento(this.departamento).subscribe(function (response) {
            if (!response.message) {
                alert('Error con el servidor');
                console.log(response);
            }
            else {
                _this.departamento = response.departamento;
                console.log('todo bien');
                alert('Departamento eliminado');
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
    return departamentosComponent;
}());
departamentosComponent = __decorate([
    core_1.Component({
        selector: 'Departamentos',
        templateUrl: 'app/views/departamentos.html',
        providers: [departamento_service_1.departamentoService]
    }),
    __metadata("design:paramtypes", [departamento_service_1.departamentoService,
        router_1.ActivatedRoute,
        router_1.Router])
], departamentosComponent);
exports.departamentosComponent = departamentosComponent;
//# sourceMappingURL=departamentos.component.js.map