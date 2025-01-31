import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router
import { IonicModule, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu-popover',
  template: `
    <ion-list>
      <ion-item button (click)="onAjustesClick()">
        <ion-icon name="settings-outline" slot="start"></ion-icon>
        <ion-label>Ajustes</ion-label>
      </ion-item>
      <ion-item button (click)="onArchivarClick()">
        <ion-icon name="archive-outline" slot="start"></ion-icon>
        <ion-label>Chats archivados</ion-label>
      </ion-item>
      <ion-item button (click)="onPerfilClick()">
        <ion-icon name="person-outline" slot="start"></ion-icon>
        <ion-label>Perfil</ion-label>
      </ion-item>
    </ion-list>
  `,
  standalone: true, // Hacemos el componente standalone
  imports: [IonicModule, CommonModule], // Importamos los módulos necesarios
})
export class MenuPopoverComponent {
  constructor(
    private popoverCtrl: PopoverController,
    private router: Router // Inyectamos Router
  ) {}

  onAjustesClick() {
    this.popoverCtrl.dismiss(); // Cerramos el popover
    this.router.navigate(['/ajustes']); // Navegamos a la página de ajustes
  }

  onArchivarClick() {
    this.popoverCtrl.dismiss();
    // Lógica para archivar
  }

  onPerfilClick() {
    this.popoverCtrl.dismiss();
    // Lógica para navegar al perfil si es necesario
  }
}
