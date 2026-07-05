import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misprestamos } from './misprestamos';

describe('Misprestamos', () => {
  let component: Misprestamos;
  let fixture: ComponentFixture<Misprestamos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misprestamos],
    }).compileComponents();

    fixture = TestBed.createComponent(Misprestamos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
