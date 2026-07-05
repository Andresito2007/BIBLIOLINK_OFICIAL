import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLibros } from './registro-libros';

describe('RegistroLibros', () => {
  let component: RegistroLibros;
  let fixture: ComponentFixture<RegistroLibros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroLibros],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroLibros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
