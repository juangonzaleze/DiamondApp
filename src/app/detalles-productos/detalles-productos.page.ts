import { Component, OnInit } from '@angular/core';
import { NavController,ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})
export class DetallesProductosPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }

  slideProducts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
  };
  
  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Esta seguro que desea comprar este plato?',
      cssClass: 'alert-style',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'cancel'
      },
      {
        text: 'Aceptar',
        role: 'submit',
        cssClass: 'submit'
      }
    ]
    });

    await alert.present();
  }


}
