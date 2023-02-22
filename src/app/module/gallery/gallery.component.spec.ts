import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  GalleryComponent
} from './gallery.component';
import {
  ActivatedRoute,
  Router
} from "@angular/router";
import {
  BehaviorSubject,
  of
} from "rxjs";
import {
  RouterTestingModule
} from "@angular/router/testing";
import {
  HttpClientTestingModule
} from "@angular/common/http/testing";
import {
  SomethingService
} from "../../service/Greeter";

fdescribe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let activateRoute: ActivatedRoute;
  let router: Router
  let someService: SomethingService
  const mockQueryParams = new BehaviorSubject<any>(
    { name: '' });

  beforeEach(async () => {
    router = jasmine.createSpyObj(
      'Router',
      {
        navigate: () => {
        }
      })
    activateRoute = jasmine.createSpyObj(
      'Activated',
      {},
      {
        queryParams: of({
          name: 'Ion',
          age: '22'
        })
      }
    )

    someService = jasmine.createSpyObj(
      'SomethingService',
      {},
      {
        street: 'Abrams2'
      })
    await TestBed.configureTestingModule(
      {
        imports: [ GalleryComponent,
          RouterTestingModule.withRoutes(
            [],
          ), HttpClientTestingModule ],
        providers: [ {
          provider: Router,
          useValue: router
        },
          {
            provider: ActivatedRoute,
            useValue: activateRoute
          },
          {
            provider: SomethingService,
            useValue: someService
          } ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(
      GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should native ', () => {
    component = new GalleryComponent(
      router,
      activateRoute,
      {} as any)
    mockQueryParams.next({ v: 'name' })
    component.native()
  });

  fit('should native else', () => {
    someService = {
      street: 'Abrams'
    }
    component = new GalleryComponent(
      router,
      activateRoute,
      someService)
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled
      .querySelector('#net')?.textContent)
      .toContain(
        'abr');
    component.ngOnChanges({ typeBorder: { currentValue: '' } } as any)

  });
});
