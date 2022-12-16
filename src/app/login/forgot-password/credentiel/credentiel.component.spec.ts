import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentielComponent } from './credentiel.component';

describe('CredentielComponent', () => {
  let component: CredentielComponent;
  let fixture: ComponentFixture<CredentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
