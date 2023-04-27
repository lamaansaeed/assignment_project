import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPageComponent } from './pic-page.component';

describe('PicPageComponent', () => {
  let component: PicPageComponent;
  let fixture: ComponentFixture<PicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
