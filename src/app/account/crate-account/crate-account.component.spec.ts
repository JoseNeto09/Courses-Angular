import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateAccountComponent } from './crate-account.component';

describe('CrateAccountComponent', () => {
  let component: CrateAccountComponent;
  let fixture: ComponentFixture<CrateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
