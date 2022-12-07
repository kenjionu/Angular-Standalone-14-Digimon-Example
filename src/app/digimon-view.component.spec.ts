import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonViewComponent } from './digimon-view.component';

describe('DigimonViewComponent', () => {
  let component: DigimonViewComponent;
  let fixture: ComponentFixture<DigimonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DigimonViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
