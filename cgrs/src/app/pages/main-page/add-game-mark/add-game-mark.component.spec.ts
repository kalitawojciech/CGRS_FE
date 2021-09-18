import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameMarkComponent } from './add-game-mark.component';

describe('AddGameMarkComponent', () => {
  let component: AddGameMarkComponent;
  let fixture: ComponentFixture<AddGameMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGameMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
