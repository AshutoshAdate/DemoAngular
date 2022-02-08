import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptInfoComponent } from './javascript-info.component';

describe('JavascriptInfoComponent', () => {
  let component: JavascriptInfoComponent;
  let fixture: ComponentFixture<JavascriptInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
