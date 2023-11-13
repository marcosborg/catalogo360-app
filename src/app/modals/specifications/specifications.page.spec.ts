import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecificationsPage } from './specifications.page';

describe('SpecificationsPage', () => {
  let component: SpecificationsPage;
  let fixture: ComponentFixture<SpecificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
