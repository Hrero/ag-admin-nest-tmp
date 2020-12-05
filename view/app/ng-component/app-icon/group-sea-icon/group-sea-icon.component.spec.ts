import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSeaIconComponent } from './group-sea-icon.component';

describe('GroupSeaIconComponent', () => {
  let component: GroupSeaIconComponent;
  let fixture: ComponentFixture<GroupSeaIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSeaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSeaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
