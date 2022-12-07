import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonListCardComponent } from './digimon-list-card.component';

describe('DigimonListCardComponent', () => {
  let component: DigimonListCardComponent;
  let fixture: ComponentFixture<DigimonListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DigimonListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
