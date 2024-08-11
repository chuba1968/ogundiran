import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PraticeareaPage } from './praticearea.page';

describe('PraticeareaPage', () => {
  let component: PraticeareaPage;
  let fixture: ComponentFixture<PraticeareaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticeareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
