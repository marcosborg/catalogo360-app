import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiferentSpecificationsPage } from './diferent-specifications.page';

describe('DiferentSpecificationsPage', () => {
  let component: DiferentSpecificationsPage;
  let fixture: ComponentFixture<DiferentSpecificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferentSpecificationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiferentSpecificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
