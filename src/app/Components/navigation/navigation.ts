import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  protected readonly links = [
    { label: 'Accueil', fragment: 'accueil' },
    { label: 'Profil', fragment: 'profil' },
    { label: 'Conférences', fragment: 'conferences' },
    { label: 'Amis', fragment: 'amis' },
    { label: 'Notifications', fragment: 'notifications' },
  ];
}