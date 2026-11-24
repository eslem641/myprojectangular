import { ConferenceList } from './Components/conference-list/conference-list';
import { Footer } from './Components/footer/footer';
import { Notifications } from './Components/notifications/notifications';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Navigation } from './Components/navigation/navigation';
import { Profile } from './Components/profile/profile';
import { Friends } from './Components/friends/friends';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigation, Profile, Friends, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
