import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesLoginComponent } from './succes-login.component';

describe('SuccesLoginComponent', () => {
  let component: SuccesLoginComponent;
  let fixture: ComponentFixture<SuccesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
