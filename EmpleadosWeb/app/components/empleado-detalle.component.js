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
var empleadoDetalleComponent = (function () {
    function empleadoDetalleComponent(_EmpleadoService, _route, _router) {
        this._EmpleadoService = _EmpleadoService;
        this._route = _route;
        this._router = _router;
    }
    empleadoDetalleComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getEmpleado();
    };
    empleadoDetalleComponent.prototype.getEmpleado = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._EmpleadoService.getEmpleado(id).subscribe(function (response) {
                _this.Empleado = response.Empleado;
                if (!_this.Empleado) {
                    console.log('error al cargar empleado');
                    _this._router.navigate(['/']);
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
    return empleadoDetalleComponent;
}());
empleadoDetalleComponent = __decorate([
    core_1.Component({
        selector: 'empleado-detalle',
        templateUrl: 'app/views/empleado-detalle.html',
        providers: [empleado_service_1.empleadoService]
    }),
    __metadata("design:paramtypes", [empleado_service_1.empleadoService,
        router_1.ActivatedRoute,
        router_1.Router])
], empleadoDetalleComponent);
exports.empleadoDetalleComponent = empleadoDetalleComponent;
//# sourceMappingURL=empleado-detalle.component.js.map