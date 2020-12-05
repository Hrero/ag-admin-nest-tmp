import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSeaIconComponent } from './private-sea-icon.component';

describe('PrivateSeaIconComponent', () => {
  let component: PrivateSeaIconComponent;
  let fixture: ComponentFixture<PrivateSeaIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSeaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSeaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
