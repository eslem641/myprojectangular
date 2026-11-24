import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-conf-details',
  templateUrl: './conf-details.html',
  styleUrl: './conf-details.css',
})
export class ConfDetails {
  readonly msgPere = input<string>('');
  readonly msgFils = output<string>();

  protected sendData(): void {
    this.msgFils.emit('Hi Dad');
  }
}
