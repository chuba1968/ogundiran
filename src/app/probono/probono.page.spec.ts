import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProbonoPage } from './probono.page';

describe('ProbonoPage', () => {
  let component: ProbonoPage;
  let fixture: ComponentFixture<ProbonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
