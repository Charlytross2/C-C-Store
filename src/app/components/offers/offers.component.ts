import { Component } from '@angular/core';
import { Producto } from 'src/app/entities/producto';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  public ofertaProductos: Producto[] = [
    {
      foto: '../../../assets/gorra_levis.webp',
      nombre: 'Gorra Levis',
      categoria: 'Gorras',
      precio: 299,
      link: 'https://articulo.mercadolibre.com.mx/MLM-1919366529-gorra-levis-negra-original-hombre-flat-unisex-87516-0233-_JMk',
    },
  ];
}
