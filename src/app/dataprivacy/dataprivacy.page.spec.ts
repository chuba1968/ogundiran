import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataprivacyPage } from './dataprivacy.page';

describe('DataprivacyPage', () => {
  let component: DataprivacyPage;
  let fixture: ComponentFixture<DataprivacyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
