import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationReviewDetailComponent } from './documentation-review-detail.component';

describe('DocumentationReviewDetailComponent', () => {
  let component: DocumentationReviewDetailComponent;
  let fixture: ComponentFixture<DocumentationReviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationReviewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
