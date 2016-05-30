import {Component} from '@angular/core'
import { Vehicle } from './shared/vehicle.model.ts'

@Component({
    selector: 'vehicle',
    template: '<p>This is a vehicle</p>'
})
export class VehicleComponent{
    vehicles: Vehicle[]
}