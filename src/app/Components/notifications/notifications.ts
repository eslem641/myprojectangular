import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  protected readonly messages = [
    'Une nouvelle conférence a été ajoutée.',
    'Les inscriptions au Signals Workshop sont ouvertes.',
  ];

  protected showMessages = false;

  protected toggleMessages(): void {
    this.showMessages = !this.showMessages;
  }
}