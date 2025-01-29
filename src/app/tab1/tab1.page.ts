import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() { }
  //arreglo de los charts 
  chats = [
    {
      username: 'Juan Pablo',
      message: 'Welcome',
      dates: '13:21',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username: 'Oscar Iván',
      message: 'Hey, how are you?',
      dates: '13:22',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username: 'Maria',
      message: 'Good morning!',
      dates: '13:23',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username: 'Lucía',
      message: 'Hola, ¿cómo estás?',
      dates: '13:24',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username: 'Carlos',
      message: '¿Listo para la reunión?',
      dates: '13:25',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      username: 'Pedro',
      message: '¡Vamos al cine!',
      dates: '13:26',
      avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
   
    // Añadir más objetos según sea necesario
  ];
}


//Este es un ejemplo de cómo se podría generar el código para los charts.
/*
chats: any[] = [];

enlazarlos donde tienes todos los cahts


*/
