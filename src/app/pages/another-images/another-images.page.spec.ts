import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherImagesPage } from './another-images.page';

describe('AnotherImagesPage', () => {
  let component: AnotherImagesPage;
  let fixture: ComponentFixture<AnotherImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
