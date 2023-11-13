import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObsPage } from './obs.page';

describe('ObsPage', () => {
  let component: ObsPage;
  let fixture: ComponentFixture<ObsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
