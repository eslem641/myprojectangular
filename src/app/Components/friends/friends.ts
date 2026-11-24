import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  protected readonly friends = [
    { id: 1, name: 'Sami' },
    { id: 2, name: 'Sarra' },
    { id: 3, name: 'Amine' },
  ];
}