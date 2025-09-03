import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookApt } from './book-apt';

describe('BookApt', () => {
  let component: BookApt;
  let fixture: ComponentFixture<BookApt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookApt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookApt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
