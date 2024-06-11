import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPagesComponent } from './properties-page.component';

describe('PropertiesPagesComponent', () => {
  let component: PropertiesPagesComponent;
  let fixture: ComponentFixture<PropertiesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
