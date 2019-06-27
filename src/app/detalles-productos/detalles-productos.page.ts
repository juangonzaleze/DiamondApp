import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})
export class DetallesProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideProducts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
  };


}
