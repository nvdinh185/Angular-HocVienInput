import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhocvienComponent } from './listhocvien.component';

describe('ListhocvienComponent', () => {
  let component: ListhocvienComponent;
  let fixture: ComponentFixture<ListhocvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhocvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
