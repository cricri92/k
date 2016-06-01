export class Vehicle {
    
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public trailer_type: string,   
        public license_plate: string,
        public color: string,
        public year: number,
        public chassis_serial: string,
        public engine_serial: string,
        public mileage: number) {}
        
}