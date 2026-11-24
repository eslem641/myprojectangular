import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfDetails } from './conf-details';

describe('ConfDetails', () => {
  let component: ConfDetails;
  let fixture: ComponentFixture<ConfDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('msgPere', 'Bnjr');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


