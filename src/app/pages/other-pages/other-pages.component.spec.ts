import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPagesComponent } from './other-pages.component';
import { MatCardModule } from '@angular/material';

describe('OtherPagesComponent', () => {
  let component: OtherPagesComponent;
  let fixture: ComponentFixture<OtherPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPagesComponent ],
      imports: [
        MatCardModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
