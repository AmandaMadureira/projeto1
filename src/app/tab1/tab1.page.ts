import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
  const alert = await this.alertController.create({
    header: 'Informação',
    message: 'Nome Sobrenome - Matrícula',
    buttons: ['OK']
  });

  await alert.present();
}
}
