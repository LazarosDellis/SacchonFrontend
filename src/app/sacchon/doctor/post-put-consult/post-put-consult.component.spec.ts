import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutConsultComponent } from './post-put-consult.component';

describe('PostPutConsultComponent', () => {
  let component: PostPutConsultComponent;
  let fixture: ComponentFixture<PostPutConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
