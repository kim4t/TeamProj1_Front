import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationReviewComponent } from './documentation-review.component';

describe('DocumentationReviewComponent', () => {
  let component: DocumentationReviewComponent;
  let fixture: ComponentFixture<DocumentationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
