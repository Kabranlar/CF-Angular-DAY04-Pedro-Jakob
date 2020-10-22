import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoDetailsComponent } from './doggo-details.component';

describe('DoggoDetailsComponent', () => {
  let component: DoggoDetailsComponent;
  let fixture: ComponentFixture<DoggoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
