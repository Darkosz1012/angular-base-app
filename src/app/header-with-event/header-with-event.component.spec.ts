import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithEventComponent } from './header-with-event.component';

describe('HeaderWithEventComponent', () => {
  let component: HeaderWithEventComponent;
  let fixture: ComponentFixture<HeaderWithEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
