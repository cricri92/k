import { Injectable } from '@angular/core';

import { VEHICLES } from './mock-vehicles';

@Injectable()
export class VehicleService {
    getVehicles(){
        return Promise.resolve(VEHICLES);
    }
}