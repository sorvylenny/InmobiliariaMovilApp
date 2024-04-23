import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InmuebleDetailPage } from './inmueble-detail.page';

describe('InmuebleDetailPage', () => {
  let component: InmuebleDetailPage;
  let fixture: ComponentFixture<InmuebleDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InmuebleDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
