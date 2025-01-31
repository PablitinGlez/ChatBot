import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  llamadas = [
    {
      username: 'Juan Pérez',
      avatarURL:
        'https://static.vecteezy.com/system/resources/previews/004/819/327/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
      tipo: 'saliente',
      hora: '10:45 AM',
    },
    {
      username: 'María López',
      avatarURL:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      tipo: 'perdida',
      hora: '9:30 AM',
    },
    {
      username: 'Carlos Díaz',
      avatarURL: 'https://cdn-icons-png.flaticon.com/512/2059/2059570.png',
      tipo: 'video',
      hora: '8:15 AM',
    },
  ];

  constructor() {}
}
