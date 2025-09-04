import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSlots } from './create-slots';

describe('CreateSlots', () => {
  let component: CreateSlots;
  let fixture: ComponentFixture<CreateSlots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSlots]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateSlots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
