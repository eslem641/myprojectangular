import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected readonly name = 'Ahmed';
  protected readonly email = 'ahmed@email.com';
}