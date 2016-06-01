import {Component} from '@angular/core'
import { NgForm }    from '@angular/common'

import { Vehicle } from './shared/vehicle.model'

@Component({
    selector: 'vehicle',
    templateUrl: 'app/vehicles/shared/create-vehicle.html',
    styleUrls: ['app/vehicles/shared/vehicles.css']
})
export class VehicleComponent {
    vehicles: Vehicle[]
    
    brand = ['Ford','Chevrolet','Mack','Hyundai']
    
    trailer = ['Remolque','Carga ligera','Cava','Carga larga']
                
    model = new Vehicle(18, 'Ford', 'Fiesta', 'Carga ligera', '5455sdf', 'Amarillo', 2005, 'sdfkjskldfjksdjf', 'kasjdfkjskdjfkd', 50456)
    
    submitted = false
    
    onSubmit() { this.submitted = true }
    
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model) }
}



