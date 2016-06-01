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
var core_1 = require('@angular/core');
var vehicle_model_1 = require('./shared/vehicle.model');
var VehicleComponent = (function () {
    function VehicleComponent() {
        this.brand = ['Ford', 'Chevrolet', 'Mack', 'Hyundai'];
        this.trailer = ['Remolque', 'Carga ligera', 'Cava', 'Carga larga'];
        this.model = new vehicle_model_1.Vehicle(18, 'Ford', 'Fiesta', 'Carga ligera', '5455sdf', 'Amarillo', 2005, 'sdfkjskldfjksdjf', 'kasjdfkjskdjfkd', 50456);
        this.submitted = false;
    }
    VehicleComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(VehicleComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    VehicleComponent = __decorate([
        core_1.Component({
            selector: 'vehicle',
            templateUrl: 'app/vehicles/shared/create-vehicle.html',
            styleUrls: ['app/vehicles/shared/vehicles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=vehicle.component.js.map