import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameMarkComponent } from './edit-game-mark.component';

describe('EditGameMarkComponent', () => {
  let component: EditGameMarkComponent;
  let fixture: ComponentFixture<EditGameMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
