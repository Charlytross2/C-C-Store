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
    {
      foto: '../../../assets/gorra_levis.webp',
      nombre: 'Gorra Levis',
      categoria: 'Gorras',
      precio: 299,
      link : 'https://articulo.mercadolibre.com.mx/MLM-1919366529-gorra-levis-negra-original-hombre-flat-unisex-87516-0233-_JMk'
    },
  ];
}
