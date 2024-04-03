import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelsDetailsInmuebleComponent } from './models-details-inmueble.component';

describe('ModelsDetailsInmuebleComponent', () => {
  let component: ModelsDetailsInmuebleComponent;
  let fixture: ComponentFixture<ModelsDetailsInmuebleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsDetailsInmuebleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelsDetailsInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
