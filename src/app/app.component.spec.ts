import {
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  AppComponent
} from './app.component';
import {
  GalleryComponent
} from "./module/gallery/gallery.component";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {
  IfNotDirective
} from "./directive/structural/if-not.directive";
import {
  HighlightDirective
} from "./directive/highlight.directive";
import {
  DelayRenderDirective
} from "./directive/structural/delay-render.directive";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        GalleryComponent,
        ReactiveFormsModule,
        RouterTestingModule,
        IfNotDirective,
        HighlightDirective,
        DelayRenderDirective
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sampleApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sampleApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(
      AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain(
      'Read');
  });
});
