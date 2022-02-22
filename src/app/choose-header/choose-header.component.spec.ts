import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHeaderComponent } from './choose-header.component';

describe('ChooseHeaderComponent', () => {
  let component: ChooseHeaderComponent;
  let fixture: ComponentFixture<ChooseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
