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
      avatarURL: 'https://randomuser.me/api/portraits/men/1.jpg',
      estadoURL: 'https://source.unsplash.com/200x300/?city',
    },
    {
      username: 'María',
      fecha: 'Hoy, 10:30 AM',
      avatarURL: 'https://randomuser.me/api/portraits/women/2.jpg',
      estadoURL: 'https://source.unsplash.com/200x300/?city',
    },
    {
      username: 'Carlos',
      fecha: 'Ayer, 8:15 PM',
      avatarURL: 'https://randomuser.me/api/portraits/men/3.jpg',
      estadoURL: 'https://source.unsplash.com/200x300/?concert',
    },
    {
      username: 'Ana',
      fecha: 'Ayer, 6:45 PM',
      avatarURL: 'https://randomuser.me/api/portraits/women/4.jpg',
      estadoURL: 'https://source.unsplash.com/200x300/?park',
    },
  ];

  comunidades = [
    {
      nombre: 'Desarrolladores Web',
      mensaje: 'Nuevos recursos de programación disponibles',
      logoURL: 'https://source.unsplash.com/50x50/?technology',
      fecha: 'Hoy',
    },
    {
      nombre: 'Gamers Unidos',
      mensaje: 'Nuevo torneo anunciado, ¡inscríbete ya!',
      logoURL: 'https://source.unsplash.com/50x50/?gaming',
      fecha: 'Ayer',
    },
    {
      nombre: 'Amantes del Cine',
      mensaje: '¿Qué película recomiendan ver este fin de semana?',
      logoURL: 'https://source.unsplash.com/50x50/?cinema',
      fecha: 'Hace 2 días',
    },
    {
      nombre: 'Viajeros por el Mundo',
      mensaje: 'Fotos increíbles de mi último viaje a Asia',
      logoURL: 'https://source.unsplash.com/50x50/?travel',
      fecha: 'Hace 3 días',
    },
  ];

  constructor() {}
}
