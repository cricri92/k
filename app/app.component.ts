import { Component } from '@angular/core';

import { VehicleComponent } from './vehicles/vehicle.component';
@Component({
  selector: 'k-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [VehicleComponent]
})
export class AppComponent { 
    title = 'Kamiono';
}
