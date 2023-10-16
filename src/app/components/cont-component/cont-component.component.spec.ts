import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContComponentComponent } from './cont-component.component';

describe('ContComponentComponent', () => {
  let component: ContComponentComponent;
  let fixture: ComponentFixture<ContComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContComponentComponent]
    });
    fixture = TestBed.createComponent(ContComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
