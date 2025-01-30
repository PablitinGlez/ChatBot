import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() {}
  //arreglo de los charts
  chats = [
    {
      username: 'Juan Pablo',
      message: 'Welcome',
      dates: '13:21',
      avatarURL:
        'https://th.bing.com/th/id/OIP.8t1WtYLAPVB189hu7pCP3gHaHa?rs=1&pid=ImgDetMain',
    },
    {
      username: 'Oscar Iván',
      message: 'Hey, how are you?',
      dates: '13:22',
      avatarURL:
        'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    },
    {
      username: 'Maria',
      message: 'Good morning!',
      dates: '13:23',
      avatarURL:
        'https://th.bing.com/th/id/R.201d17520f0f579146c4e7f45960dd39?rik=XEgdkmNtQ3N7bg&pid=ImgRaw&r=0',
    },
    {
      username: 'Lucía',
      message: 'Hola, ¿cómo estás?',
      dates: '13:24',
      avatarURL:
        'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png',
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
