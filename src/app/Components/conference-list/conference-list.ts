import { Component } from '@angular/core';
import { ConfDetails } from '../conf-details/conf-details';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Model/conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, NgClass, FormsModule, ConfDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  protected readonly today = new Date();

  protected readonly msg = 'Bnjr';

  protected showData(message: string): void {
    window.alert(message);
  }

  protected searchTitle = '';

  protected conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découverte des nouveautés d’Angular 21.',
      date: '2027-11-15',
      place: 'Tunis',
      maxParticipants: 40,
      nbParticipants: 15,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signaux Angular.',
      date: '2027-11-30',
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Présentation des technologies du Web.',
      date: '2027-11-20',
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  protected get filteredConferences(): Conference[] {
    const query = this.searchTitle.trim().toLowerCase();

    return this.conferences.filter((conference) => {
      const conferenceDate = new Date(`${conference.date}T00:00:00`);

      return (
        conferenceDate.getTime() > this.today.getTime() &&
        conference.title.toLowerCase().includes(query)
      );
    });
  }

  protected remainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  protected register(conference: Conference): void {
    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }
}


