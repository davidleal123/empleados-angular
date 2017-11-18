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
var departamento_service_1 = require("../services/departamento.service");
var departamento_1 = require("../models/departamento");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var departamentoeditarComponent = (function () {
    function departamentoeditarComponent(_departamentoService, _route, _router) {
        this._departamentoService = _departamentoService;
        this._route = _route;
        this._router = _router;
    }
    departamentoeditarComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.departamento = new departamento_1.departamento(0, "");
        this.getDepartamento();
    };
    departamentoeditarComponent.prototype.getDepartamento = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._departamentoService.getDepartamento(id).subscribe(function (response) {
                if (!_this.departamento) {
                    console.log('error al cargar Departamento');
                    _this._router.navigate(['/departamentos']);
                }
                else {
                    _this.departamento = response.Departamento;
                    console.log(_this.departamento);
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
    departamentoeditarComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.departamento.descripcion) {
            console.log('campos vacios');
            alert('No puede meter datos vacios');
        }
        else {
            console.log(this.departamento);
            this._departamentoService.putDepartamento(this.departamento).subscribe(function (response) {
                console.log(_this.departamento);
                if (!response.message) {
                    alert('Error con el servidor');
                    console.log(response.departamento);
                }
                else {
                    _this.departamento = response.departamento;
                    console.log('todo bien');
                    _this._router.navigate(['/departamentos']);
                    alert('Departamento actualizado');
                    console.log(_this.departamento);
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
    return departamentoeditarComponent;
}());
departamentoeditarComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/views/departamento-editar.html',
        providers: [departamento_service_1.departamentoService]
    })
    // Clase del componente donde irán los datos y funcionalidades
    ,
    __metadata("design:paramtypes", [departamento_service_1.departamentoService,
        router_1.ActivatedRoute,
        router_1.Router])
], departamentoeditarComponent);
exports.departamentoeditarComponent = departamentoeditarComponent;
//# sourceMappingURL=departamento-editar.component.js.map