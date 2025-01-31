import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-estado',
  templateUrl: './item-estado.component.html',
  styleUrls: ['./item-estado.component.scss'],
  standalone: false,
})
export class ItemEstadoComponent implements OnInit {
  avatarURL: string = ''; // Definir avatarURL
  username: string = ''; // Definir username

  constructor() {}

  ngOnInit() {}
}
