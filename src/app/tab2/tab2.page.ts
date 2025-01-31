import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  estados = [
    {
      username: 'Juan',
      fecha: 'Hoy, 9:00 AM',
      avatarURL:
        'https://th.bing.com/th/id/OIP.Mag0h7rr1UTjLXBS0mqQgwHaHa?rs=1&pid=ImgDetMain',
      estadoURL:
        'https://th.bing.com/th/id/OIP.mO71r1oZ1wgIRf5RMR2VfwHaEo?rs=1&pid=ImgDetMain',
    },
    {
      username: 'Pou',
      fecha: 'Hoy, 10:30 AM',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147135.png',
      estadoURL:
        'https://th.bing.com/th/id/OIP.TMNjzzPu23FYRPfuQkmK-wHaE8?rs=1&pid=ImgDetMain',
    },
    {
      username: 'Mom',
      fecha: 'Ayer, 8:15 PM',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/147/147140.png',
      estadoURL:
        'https://th.bing.com/th/id/R.7d1f8b9d5e8b9d324479375f38ffc121?rik=jGk%2b6gxBDnSXCA&pid=ImgRaw&r=0',
    },
    {
      username: 'Dad',
      fecha: 'Ayer, 6:45 PM',
      avatarURL:
        'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      estadoURL:
        'https://th.bing.com/th/id/R.38d47af98358f1ce18a7562c94f0504b?rik=i8WctcmaXrJEDw&pid=ImgRaw&r=0',
    },
  ];

  comunidades = [
    {
      nombre: 'Midudev',
      mensaje: 'Nuevos recursos de programación disponibles',
      logoURL:
        'https://th.bing.com/th/id/OIP.MFfkJoJjTRJ1VGCfxrEXBAAAAA?rs=1&pid=ImgDetMain',
      fecha: 'Hoy',
    },
    {
      nombre: 'Mouredev',
      mensaje: 'Nuevos recursos de programación disponibles',
      logoURL:
        'https://th.bing.com/th/id/OIP.cSK2leXwG4zf3PZuGs1ERQHaHa?rs=1&pid=ImgDetMain',
      fecha: 'Ayer',
    },
    {
      nombre: 'Todo{ode',
      mensaje: 'Nuevos recursos de programación disponibles',
      logoURL:
        'https://th.bing.com/th/id/R.5d8589a69e149f08510729c1850ba32f?rik=3NiwSNpxwV2ENg&pid=ImgRaw&r=0',
      fecha: 'Hace 2 días',
    },
    {
      nombre: 'Netflix',
      mensaje: 'Fotos increíbles de mi último viaje a Asia',
      logoURL:
        'https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png',
      fecha: 'Hace 3 días',
    },
  ];

  constructor() {}
}
