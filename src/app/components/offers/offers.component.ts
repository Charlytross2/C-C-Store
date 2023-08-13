import { Component } from '@angular/core';
import { Producto } from 'src/app/entities/producto';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  public ofertaProductos: Producto[] = [];
}
