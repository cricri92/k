"use strict";
var Vehicle = (function () {
    function Vehicle(id, brand, model, trailer_type, license_plate, color, year, chassis_serial, engine_serial, mileage) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.trailer_type = trailer_type;
        this.license_plate = license_plate;
        this.color = color;
        this.year = year;
        this.chassis_serial = chassis_serial;
        this.engine_serial = engine_serial;
        this.mileage = mileage;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.model.js.map