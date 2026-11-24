import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceList } from './conference-list';

describe('ConferenceList', () => {
  let component: ConferenceList;
  let fixture: ComponentFixture<ConferenceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceList],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('keeps registration visible and updates the number of participants', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const card = element.querySelector('.conference-card')!;
    const details = card.querySelector('details')!;
    const button = card.querySelector('button')!;

    expect(details.open).toBe(false);
    expect(details.contains(button)).toBe(false);
    expect(card.textContent).toContain('Places restantes : 25');

    button.click();
    await fixture.whenStable();

    expect(card.textContent).toContain('Places restantes : 24');
    expect(details.textContent).toContain('16 / 40');
  });

  it('keeps the full conference button disabled and red', () => {
    const element = fixture.nativeElement as HTMLElement;
    const cards = element.querySelectorAll('.conference-card');
    const button = cards[2].querySelector('button')!;

    expect(button.disabled).toBe(true);
    expect(button.classList.contains('full')).toBe(true);
    expect(cards[1].querySelector('button')!.classList.contains('few-places')).toBe(true);
  });  it('receives Hi Dad from the child Send button and displays an alert', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    try {
      const child = (fixture.nativeElement as HTMLElement).querySelector('app-conf-details')!;
      expect(child.textContent).toContain('Msg reçu depuis Père : Bnjr');
      child.querySelector('button')!.click();
      expect(alertSpy).toHaveBeenCalledWith('Hi Dad');
    } finally {
      alertSpy.mockRestore();
    }
  });});


