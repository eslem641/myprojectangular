import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

interface Conference {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-conference-list',
 imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
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
  protected searchTitle = '';

protected get filteredConferences(): Conference[] {
  const query = this.searchTitle.trim().toLowerCase();

  return this.conferences.filter((conference) =>
    conference.title.toLowerCase().includes(query),
  );
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