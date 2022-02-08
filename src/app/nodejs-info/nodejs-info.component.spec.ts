import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsInfoComponent } from './nodejs-info.component';

describe('NodejsInfoComponent', () => {
  let component: NodejsInfoComponent;
  let fixture: ComponentFixture<NodejsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
