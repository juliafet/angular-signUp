import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormExampleComponent } from './input-form-example.component';

describe('InputFormExampleComponent', () => {
  let component: InputFormExampleComponent;
  let fixture: ComponentFixture<InputFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
