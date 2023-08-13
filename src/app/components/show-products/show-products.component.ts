import { Component } from '@angular/core';
import { Producto } from 'src/app/entities/producto';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent {
  public productos: Producto[] = [
    {
      foto: '../../../assets/reloj_negro.jpeg',
      nombre: 'Kit de reloj Luis Cardini',
      categoria: 'Relojeria',
      precio: 599,
      link : ''
    },
    {
      foto: '../../../assets/reloj_cafe.jpeg',
      nombre: 'Kit de reloj Luis Cardini',
      categoria: 'Relojeria',
      precio: 599,
      link : ''
    },
  ];
}
