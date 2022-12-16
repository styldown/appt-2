import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctomComponent } from './octom.component';

describe('OctomComponent', () => {
  let component: OctomComponent;
  let fixture: ComponentFixture<OctomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
