import { ConferenceList } from './conference-list/conference-list';
import { Footer } from './footer/footer';
import { Notifications } from './notifications/notifications';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navigation } from './navigation/navigation';
import { Profile } from './profile/profile';
import { Friends } from './friends/friends';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Profile, Friends, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}