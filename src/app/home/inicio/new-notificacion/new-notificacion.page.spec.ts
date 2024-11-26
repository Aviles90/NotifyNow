import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewNotificacionPage } from './new-notificacion.page';

describe('NewNotificacionPage', () => {
  let component: NewNotificacionPage;
  let fixture: ComponentFixture<NewNotificacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNotificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
