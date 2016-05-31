import {Component} from '@angular/core'
import { Vehicle } from './shared/vehicle.model.ts'

@Component({
    selector: 'vehicle',
    templateUrl: 'app/vehicles/shared/create-vehicle.html',
    styleUrls: ['app/vehicles/shared/vehicles.css']
})
export class VehicleComponent{
    vehicles: Vehicle[]
}