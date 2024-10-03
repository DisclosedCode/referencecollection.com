/*
 * Angular Reference
 *
 * Author: ReferenceCollection.com
 * License: MIT License
 * 
 * Table of Contents:
 * 1. Introduction to Angular
 * 2. Setting Up an Angular Project
 * 3. Project Structure Overview
 * 4. Components
 * 5. Modules
 * 6. Data Binding
 * 7. Directives
 * 8. Pipes
 * 9. Services and Dependency Injection
 * 10. Routing and Navigation
 * 11. Forms (Template-driven and Reactive)
 * 12. HTTP Client and Server Communication
 * 13. Observables and RxJS
 * 14. Interceptors
 * 15. Angular Lifecycle Hooks
 * 16. Angular Change Detection
 * 17. Component Communication
 * 18. Dynamic Components
 * 19. Content Projection
 * 20. Angular State Management with NgRx
 * 21. Angular CLI in-depth
 */

/**
 * 1. Introduction
 * 
 * Overview:
 * 
 * Angular is a powerful, open-source framework for building single-page applications.
 * Developed and maintained by Google, it offers a complete solution, including powerful 
 * features like two-way data binding, dependency injection, and a modular architecture.
 * 
 * Key features of Angular:
 * - Component-based architecture
 * - TypeScript support
 * - Powerful CLI
 * - Dependency injection
 * - Reactive programming with RxJS
 * - Comprehensive testing utilities
 * 
 * Angular follows a component-based architecture, where the UI is composed
 * of reusable components. This approach promotes modularity, reusability,
 * and easier maintenance of code.
 * 
 * History:
 * 
 * Angular was initially released as AngularJS by Google in 2010. In 2016, 
 * Angular 2 was introduced as a complete rewrite of AngularJS, focusing on modularity,
 * performance, and a modern approach to development.
 * 
 */

/**
 * 2. Setting Up an Angular Project
 * 
 * To set up an Angular project, you need to:
 * 1. Install Node.js and npm
 * 2. Install Angular CLI
 * 3. Create a new project
 * 4. Serve the application
 * 
 * Example:
 * - npm install -g @angular/cli
 * - ng new my-angular-app
 * - cd my-angular-app
 * - ng serve
 */

/**
 * 3. Project Structure Overview
 * 
 * An Angular project typically follows a standardized structure that makes it easy to 
 * organize and manage code, especially for large applications.
 * 
 * ├── src/                       // Main project source folder
 * │   ├── app/                   // Core Angular application folder
 * │   │   ├── core/              // CoreModule: Singleton services, global components
 * │   │   ├── shared/            // SharedModule: Reusable components, directives, and pipes
 * │   │   ├── features/          // Feature modules: Organized by feature or functionality
 * │   │   ├── models/            // TypeScript interfaces and models
 * │   │   ├── services/          // Application services: Business logic and data handling
 * │   │   ├── app.module.ts      // The root module that bootstraps the app
 * │   │   ├── app.component.ts   // The root component: Entry component for the application
 * │   │   └── app.component.html // Template for the root component
 * │   ├── assets/                // Static assets like images, styles, and other files
 * │   ├── environments/          // Environment-specific configuration files
 * │   ├── index.html             // Main HTML file: Entry point for the application
 * │   ├── main.ts                // Main entry point for Angular: Bootstraps the root module
 * │   ├── styles.css             // Global styles for the application
 * │   └── angular.json           // Angular CLI configuration file: Project and build settings
 * ├── e2e/                       // End-to-end test folder
 * │   ├── src/                   // E2E test source folder
 * │   │   ├── app.e2e-spec.ts    // E2E test specifications
 * │   │   └── app.po.ts          // Page object for E2E tests
 * ├── .editorconfig              // Editor configuration file for consistent coding styles
 * ├── .gitignore                 // Specifies files and directories to be ignored by Git
 * ├── package.json               // Project metadata and dependencies
 * ├── tsconfig.json              // TypeScript configuration file
 * └── tslint.json                // Linting configuration file
 */

/**
 * 4. Components
 * 
 * Components are the fundamental building blocks of Angular applications.
 * They encapsulate data, logic, and view for a part of the application.
 * 
 * A component consists of:
 * - A TypeScript class (component logic)
 * - An HTML template (component view)
 * - Styles (CSS for the component)
 * 
 * Components are defined using the @Component decorator
 */

@Component({
    selector: 'app-hello',
    template: '<h2>Hello, {{name}}!</h2>',
    styles: ['h2 { font-style: italic; }']
})
export class HelloComponent {
    name: string = 'Angular';
}

/**
 * 5. Modules
 * 
 * Angular modules are a way to group and organize components, directives, pipes, and 
 * services that are related into cohesive blocks of functionality.
 * 
 * A module is a class decorated with `@NgModule` decorator, which provides metadata 
 * that tells Angular how to compile and run the module’s code.
 * 
 * Some built-in modules:
 * - BrowserModule: Required by default in every Angular application.
 * - FormsModule: Adds support for template-driven forms.
 * - HttpClientModule: Adds the ability to communicate with backend services via HTTP.
 * - RouterModule: Adds routing capabilities.
 * - CommonModule: Provides commonly needed services, directives(`NgIf`...), and pipes.
 * 
 * Key Concepts:
 * - declarations: Components, directives, and pipes in this module.
 * - imports: Other modules whose classes are needed by this module.
 * - providers: Services available throughout the app.
 * - bootstrap: The root component to bootstrap.
 * - exports: Components, directives, and pipes available to other modules.
 */

/** Feature module */
@NgModule({
    declarations: [
        UserComponent  // Declaring UserComponent in this module
    ],
    imports: [
        CommonModule,  // Importing CommonModule for common directives
        FormsModule    // Importing FormsModule for template-driven forms
    ],
    exports: [
        UserComponent  // Exporting UserComponent so it can be used in other modules
    ],
    providers: [
        UserService    // Providing UserService at the module level
    ]
})
export class UserModule { }

/** Root module */
@NgModule({
    declarations: [
        AppComponent      // Declaring AppComponent in the root module
    ],
    imports: [
        BrowserModule,    // Importing BrowserModule for critical app services
        UserModule,       // Importing UserModule to use UserComponent and UserService
        HttpClientModule  // Importing HttpClientModule for making HTTP requests
    ],
    providers: [],
    bootstrap: [
        AppComponent      // Bootstrapping the application with AppComponent
    ]
})
export class AppModule { }


/**
 * 6. Data Binding
 * 
 * Angular provides powerful data binding capabilities for creating dynamic views.
 * 
 * There are four forms of data binding:
 * 1. Interpolation: {{value}}
 * 2. One-way binding: [property]="value"
 * 3. Two-way binding: [(ngModel)]="value"
 * 4. Event binding: (event)="handler()"
 * 
 * Templates support various features like structural directives,
 * attribute directives, and pipes for transforming data.
 */

@Component({
    selector: 'app-data-binding-demo',
    template: `
      <h2>{{title}}</h2>
      <img [src]="imageUrl" alt="Example image">
      <button (click)="onClick()">Click me</button>
      <input [(ngModel)]="name" placeholder="Enter your name" #inputName>
      <p>Hello, {{name}}!</p>
    `
})
export class DataBindingDemoComponent {
    title = 'Data Binding Demo';
    imageUrl = 'path/to/image.jpg';
    name = '';

    onClick() {
        console.log('Button clicked!');
    }
}

/**
 * 7. Directives
 * 
 * Directives are classes that add additional behavior to elements in your Angular applications.
 * There are three kinds of directives in Angular:
 * 1. Component Directives: These are directives with a template.
 * 2. Structural Directives: These change the DOM layout by adding and removing DOM elements.
 * 3. Attribute Directives: These change the appearance or behavior of an element, component, or another directive.
 * 
 * Common Built-in structural directives include *ngIf, *ngFor, *ngSwitch
 * Common Built-in attribute directives include ngClass, ngStyle
 */

@Component({
    selector: 'app-directive-demo',
    template: `
      <ul>
        <li *ngFor="let item of items" [ngClass]="{'even': item % 2 === 0}" [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">
          {{item}}
        </li>
      </ul>
      <p *ngIf="items.length === 0">No items to display</p>
    `
})
export class DirectiveDemoComponent {
    items = [1, 2, 3, 4, 5];
    textColor = 'blue';
    fontSize = 18;
}

/**
 * 8. Pipes
 * 
 * Pipes are simple functions to use in template expressions to accept an input value
 * and return a transformed value. Pipes are useful for transforming data for display.
 * 
 * Angular provides several built-in pipes, such as:
 * - DatePipe: Formats a date value according to locale rules.
 * - UpperCasePipe: Transforms text to upper case.
 * - LowerCasePipe: Transforms text to lower case.
 * - CurrencyPipe: Transforms a number to a currency string.
 * - PercentPipe: Formats a number as a percentage
 * - DecimalPipe: Formats a number according to a format
 * - AsyncPipe: Unwraps and subscribes to an Observable or Promise
 * 
 * You can also create custom pipes to suit your application's needs .
 */

/** Custom pipe */
@Pipe({ name: 'exponential' })
export class ExponentialPipe implements PipeTransform {
    transform(value: number, exponent = 1): number {
        return Math.pow(value, exponent);
    }
}

/** Built-in pipes */
@Component({
    selector: 'app-pipe-demo',
    template: `
    <p>{{currentDate | date:'fullDate'}}</p>
    <p>{{name | uppercase}}</p>
    <p>{{price | currency:'USD'}}</p>
    <p>{{2 | exponential:10}}</p>
    <p>Decimal: {{ amount | number:'1.2-2' }}</p>
    <p>Percentage: {{ percentage | percent }}</p>
    <p>Async Data: {{ asyncValue | async }}</p>
  `
})
export class PipeDemoComponent {
    currentDate = new Date();
    name = 'David';
    price = 42.99;
    amount = 1234.567;
    percentage = 0.75;
    asyncValue = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Async data'), 2000);
    });
}

/**
 * 9. Services and Dependency Injection
 * 
 * Services in Angular are used to share data and functionality across multiple components.
 * Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control).
 * It allows classes to receive dependencies from external sources rather than creating them.
 * 
 * Key concepts:
 * - @Injectable decorator
 * - Providers
 * - Injection tokens
 * - Provider scope (root, module, component)
 */

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: string[] = [];

    addData(item: string) {
        this.data.push(item);
    }

    getData(): string[] {
        return this.data;
    }
}

@Component({
    selector: 'app-service-demo',
    template: `
    <input #newItem (keyup.enter)="addItem(newItem.value); newItem.value=''">
    <button (click)="addItem(newItem.value)">Add</button>
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `
})
export class ServiceDemoComponent {
    items: string[] = [];

    constructor(private dataService: DataService) {
        this.items = this.dataService.getData();
    }

    addItem(item: string) {
        this.dataService.addData(item);
    }
}

/**
 * 10. Routing and Navigation
 * 
 * Angular's router enables navigation from one view to another as users perform tasks.
 * 
 * Key concepts in Angular routing:
 * - Basic Routes
 * - Route Parameters
 * - Router Outlet
 * - Child Routes
 * - Lazy Loading
 * - Navigation
 * - Location Strategies
 * - Route Resolvers
 * - Route Events
 */

/**
 * Basic Routes: 
 * Define the main navigation, each route maps a URL path to a component.
 */

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Route Parameters:
 * Allow you to pass data to routes.
 * - ActivatedRoute: Provides information about a route associated with a component.
 */

const routes: Routes = [
    { path: 'user/:id', component: UserDetailComponent }
];

import { ActivatedRoute } from '@angular/router';

export class UserDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const userId = params['id'];
            // Fetch user using userId
        });
    }
}

/**
 * Router Outlet:
 * Directive from the router library that marks where the router should display a view.
 * - RouterLink: A directive used to navigate to a different route.
 * - RouterLinkActive : Applies CSS classes to element when its link is active.
 */
@Component({
    selector: 'app-root',
    template: `
      <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
      <router-outlet></router-outlet>
    `
})
export class AppComponent { }

/**
 * Child Routes: 
 * Enable you to create hierarchical route structures. 
 * This is useful for creating complex layouts with nested views.
 */
const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: ':id', component: ProductDetailComponent }
        ]
    }
];

/**
 * Route Guards: 
 * Protecting routes with authentication or other conditions.
 */
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Implement authentication logic
        return this.authService.isAuthenticated();
    }
}

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

/**
 * Lazy Loading:
 * Loading modules on demand for better performance 
 */
const routes: Routes = [
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

/**
 * Navigation: 
 * Provides methods to navigate between routes programmatically,
 */
import { Router } from '@angular/router';

export class NavigationComponent {
    constructor(private router: Router) { }

    navigateToUser(userId: string) {
        this.router.navigate(['/user', userId]);
    }

    navigateToHome() {
        this.router.navigateByUrl('/home');
    }
}

/**
 * Location Strategies:
 * Angular supports two location strategies: HashLocationStrategy and PathLocationStrategy (default).
 * HashLocationStrategy uses hash-based URLs (e.g., mydomain.com/#/home)
 * PathLocationStrategy uses the HTML5 History API (e.g., mydomain.com/home)
 */
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Route Resolvers:
 * Resolvers allow you to fetch data before navigating to a route, ensuring that necessary data
 * is available before the route is activated.
 */
@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.paramMap.get('id'));
    }
}

const routes: Routes = [
    {
        path: 'user/:id',
        component: UserDetailComponent,
        resolve: { user: UserResolver }
    }
];

/**
 * Route Events:
 * The Router emits navigation events that you can subscribe to for tracking navigation progress.
 */
export class AppComponent {
    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Navigation started');
            }
            if (event instanceof NavigationEnd) {
                console.log('Navigation ended');
            }
        });
    }
}

/**
 * 11. Forms (Template-driven and Reactive)
 * 
 * Angular provides two different approaches to handling user input through forms:
 * reactive and template-driven.
 * 
 * Template-driven forms:
 * - Use two-way data binding with [(ngModel)]
 * - Good for simple forms
 * - Most of the form logic is driven by directives in the template
 * 
 * Reactive forms:
 * - More robust, scalable, and testable
 * - Form models are defined in component class
 * - Use reactive programming patterns
 */

/* Example: Template-driven form */
@Component({
    selector: 'app-template-form',
    template: `
      <form (ngSubmit)="onSubmit()" #userForm="ngForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" [(ngModel)]="user.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" [(ngModel)]="user.email" required>
        </div>
        <button type="submit" [disabled]="!userForm.form.valid">Submit</button>
      </form>
    `
})
export class TemplateFormComponent {
    user = { name: '', email: '' };

    onSubmit() {
        console.log(this.user);
    }
}

/* Example: Reactive form */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email">
      </div>
      <button type="submit" [disabled]="!userForm.valid">Submit</button>
    </form>
  `
})
export class ReactiveFormComponent {
    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        console.log(this.userForm.value);
    }
}

/**
 * 12. HTTP Client and Server Communication
 * 
 * Angular provides a powerful HTTP client for making HTTP requests to server-side APIs..
 * 
 * Key features:
 * - Typed response
 * - Error handling with observables
 * - Interceptors for request/response
 * - Testing features
 */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://api.example.com/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}

@Component({
    selector: 'app-user-list',
    template: `
    <ul>
      <li *ngFor="let user of users">{{user.name}}</li>
    </ul>
  `
})
export class UserListComponent implements OnInit {
    users: any[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => console.error('Error fetching users', error)
        );
    }
}

/**
 * 13. Observables and RxJS
 * 
 * Observables provide support for passing messages between parts of your application.
 * They are used for asynchronous event handling and programming.
 * 
 * RxJS (Reactive Extensions for JavaScript) is a library for reactive programming
 * using Observables that makes it easier to compose asynchronous or callback-based code.
 * 
 *  Key Concepts:
 * - Observable: Represents a collection of future values or events.
 * - Observer: Consumes the data delivered by an Observable.
 * - Subscription: Represents the execution of an Observable, allowing for cancellation.
 * - Operators: Functions that modify data streams (e.g., map, filter, merge).
 * - Subjects: A special type of Observable that allows for multicasting to multiple Observers.
 * - Schedulers: Control the concurrency of the execution of Observables.
 */

/**
 * Basic Observable:
 * Represents a collection of future values or events.
 */

const observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

observable.subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('Completed')
});

/**
 * Creating Observables:
 * RxJS provides various ways to create Observables.
 */

// From values
const obsFromValues = of(1, 2, 3);

// From an array
const obsFromArray = from([1, 2, 3]);

// From a Promise
const obsFromPromise = from(Promise.resolve('Hello'));

// Interval
const obsInterval = interval(1000); // Emits incremental numbers every second

/**
 * RxJS Operators:
 * Functions that modify data streams (e.g., map, filter, merge).
 * - map: Transforms each emitted value.
 * - filter: Filters emitted values based on a condition.
 * - mergeMap: Projects each source value to an Observable and flattens them.
 * - catchError: Catches errors on the Observable to gracefully handle errors.
 * - switchMap: Maps to an Observable, emitting values only from the latest.
 */

const source = of(1, 2, 3, 4, 5);

const transformed = source.pipe(
    map(x => x * 2),
    filter(x => x > 5)
);

transformed.subscribe(value => console.log(value)); // Outputs: 6, 8, 10

/* Common Use Case: HTTP Requests */

@Component({
    selector: 'app-user',
    template: '<div>{{user | json}}</div>'
})
export class UserComponent implements OnInit {
    user: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any>('https://api.example.com/user')
            .pipe(
                catchError(error => {
                    console.error('An error occurred:', error);
                    return of(null); // Return a default value or a new Observable
                })
            )
            .subscribe(data => this.user = data);
    }
}

/**
 * Subjects:
 * A Subject is a special type of Observable that allows values to be 
 * multicasted to many Observers.
 */

const subject = new Subject<number>();

subject.subscribe(value => console.log('Observer A:', value));
subject.subscribe(value => console.log('Observer B:', value));

subject.next(1);
// Output: Observer A: 1
// Output: Observer B: 1
subject.next(2);
// Output: Observer A: 2
// Output: Observer B: 2

/**
 * BehaviorSubject:
 * A variant of Subject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 */

const behaviorSubject = new BehaviorSubject<number>(0);

behaviorSubject.subscribe(value => console.log('Observer A:', value));
// Output: Observer A: 0

behaviorSubject.next(1);
// Output: Observer A: 1

behaviorSubject.subscribe(value => console.log('Observer B:', value));
// Output: Observer B: 1

behaviorSubject.next(2);
// Output: Observer A: 2
// Output: Observer B: 2

/* It's important to unsubscribe from Observables to prevent memory leaks. */

subject.unsubscribe();
behaviorSubject.unsubscribe();

/**
 * Combining Observables:
 * RxJS provides operators to combine multiple Observables.
 * - merge: Emits values from multiple observables concurrently.
 * - concat: Emits values from multiple observables sequentially.
 * - combineLatest: Emits the latest values from multiple observables.
 * - forkJoin: Emits the last values from all observables after they complete.
 * - zip: Emits combined arrays from observables whenever all emit a value.
 * - withLatestFrom: Emits values from the source observable combined with the latest values from others.
 */

import { combineLatest, merge } from 'rxjs';

const obs1 = interval(1000);
const obs2 = interval(500);

const combined = combineLatest([obs1, obs2]);
const merged = merge(obs1, obs2);

/**
 * Async Pipe:
 * Angular's async pipe subscribes to an Observable and returns the latest value it has emitted.
 */

@Component({
    selector: 'app-async-example',
    template: '<div>{{data$ | async}}</div>'
})
export class AsyncExampleComponent {
    data$: Observable<string>;

    constructor(private dataService: DataService) {
        this.data$ = this.dataService.getData();
    }
}

/**
 * Debouncing User Input:
 * debounceTime delays value emissions from an observable by a specified duration. 
 * If a new value arrives before the duration ends, the timer resets. Useful for handling rapid events like user input.
 * 
 * Use Cases:
 * - User Input: Wait until the user stops typing before an action.
 * - Scroll Events: Limit handling rate for performance.
 * - Button Clicks: Prevent multiple form submissions.
 */

@Component({
    selector: 'app-search',
    template: '<input [formControl]="searchControl">'
})
export class SearchComponent implements OnInit {
    searchControl = new FormControl();

    ngOnInit() {
        /**
         * distinctUntilChanged:
         * Emitting only unique search terms to avoid redundant searches
         */
        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(term => this.searchService.search(term))
        ).subscribe(results => {
            // Handle search results
        });
    }
}

/**
 * 14. Interceptors
 * 
 * Interceptors provide a mechanism to intercept and/or mutate HTTP requests and responses
 * globally in an Angular application.
 */

import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
    HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';

/**
 * Basic Interceptor:
 * A basic interceptor that logs all outgoing requests and incoming responses 
 * and catches and handles HTTP errors globally.
 */

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`Outgoing request to ${req.url}`);

        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log(`Incoming response from ${event.url}`);
                }
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    // Server-side error
                    errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
                }
                console.error(errorMsg);
                return throwError(errorMsg);
            }),
            // Retry failed requests up to 3 times
            retry(3)
        );
    }
}

/**
 * Authentication Interceptor:
 * An interceptor that adds an authentication token to outgoing requests.
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authService.getAuthToken();

        if (authToken) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`)
            });
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}

/**
 * Registering Interceptors:
 * Interceptors are registered in the providers array of a module, typically AppModule.
 * They are applied in the order they are listed for outgoing requests, and in 
 * reverse order for incoming responses
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // ... other interceptors
    ]
})
export class AppModule { }

/**
 * 15. Angular Lifecycle Hooks
 *
 * Lifecycle hooks are interfaces that allow you to tap into different moments
 * in the lifecycle of a component or directive.
 * 
 * Main lifecycle hooks:
 * - ngOnChanges: Called when a data-bound property of a directive changes
 * - ngOnInit: Called once the component is initialized
 * - ngDoCheck: Called during every change detection run
 * - ngAfterContentInit: Called after content (ng-content) has been projected into view
 * - ngAfterContentChecked: Called every time the projected content has been checked
 * - ngAfterViewInit: Called after the component's view (and child views) has been initialized
 * - ngAfterViewChecked: Called every time the view (and child views) have been checked
 * - ngOnDestroy: Called just before the directive is destroyed
 */

// Example: Using lifecycle hooks
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: '<p>{{ message }}</p>'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
    @Input() message: string;

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called', changes);
    }

    ngOnInit() {
        console.log('ngOnInit called');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }
}

/**
 * 16. Angular Change Detection
 * 
 * Change Detection is the process by which Angular keeps the view in sync with the component's data.
 * It's one of the most important aspects of Angular's performance and functionality.
 * 
 * By default, Angular uses a strategy called "CheckAlways". It checks the entire component tree
 * for changes on every event (click, input, timeout, HTTP response, etc.).
 */

/**
 * OnPush Change Detection Strategy:
 * 
 * The OnPush strategy improves performance by reducing the number of checks Angular performs.
 * With OnPush, Angular only checks the component when:
 * - The reference of an @Input property changes
 * - An event originated from the component or one of its children
 * - You run change detection explicitly
 * - An Observable linked to the template via the async pipe emits a new value
 */

@Component({
    selector: 'app-on-push',
    template: `<p>{{ data }}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnChanges {
    @Input() data: string;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data) {
            console.log('Data changed:', this.data);
        }
    }
}

/**
* Manual Change Detection:
* Sometimes you need to manually trigger change detection, especially when using OnPush strategy.
*/

@Component({
    selector: 'app-manual-detection',
    template: `<p>{{ data }}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualDetectionComponent {
    data = 'Initial value';

    constructor(private cd: ChangeDetectorRef) {
        setTimeout(() => {
            this.data = 'Updated value';
            // We need to manually detect changes
            this.cd.detectChanges();
        }, 2000);
    }
}

/**
 * Detaching and Reattaching Change Detector
 * You can detach the change detector to prevent automatic change detection,
 * and reattach it when needed.
 */

@Component({
    selector: 'app-detach-reattach',
    template: `<p>{{ data }}</p>`
})
export class DetachReattachComponent {
    data = 'Initial value';

    constructor(private cd: ChangeDetectorRef) {
        this.cd.detach(); // Detach the change detector

        setTimeout(() => {
            this.data = 'Updated value';
            this.cd.reattach(); // Reattach the change detector
        }, 2000);
    }
}

/**
 * Zone.js and NgZone:
 * Zone.js is a library that creates a zone where all asynchronous operations are tracked.
 * Angular uses Zone.js to automatically trigger change detection.
 * NgZone is Angular's wrapper around Zone.js.
 */

@Component({
    selector: 'app-zone',
    template: `<p>{{ data }}</p>`
})
export class ZoneComponent {
    data = 'Initial value';

    constructor(private zone: NgZone) {
        this.zone.runOutsideAngular(() => {
            // This code runs outside Angular's zone, so change detection is not triggered
            setTimeout(() => {
                this.data = 'Updated outside zone';
                // We need to re-enter the Angular zone to trigger change detection
                this.zone.run(() => { });
            }, 2000);
        });
    }
}

/**
 * 17. Component Communication
 *
 * In Angular, components are the building blocks of an application. Components can communicate
 * with each other using various techniques, allowing them to share data and functionality:
 * 
 * Key features:
 * - Input and Output
 * - ViewChild and ViewChildren
 * - Service-based Communication
 */

import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

/**
 * Input and Output Properties:
 * Input allow a parent component to pass data to a child component.
 * Output allow a child component to emit events that the parent can listen to.
 */

@Component({
    selector: 'app-child',
    template: `
    <h2>Child Component</h2>
    <p>Received value: {{ value }}</p>
    <button (click)="onClick()">Emit Event</button>
  `
})
export class ChildComponent {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    onClick() {
        this.valueChange.emit('New value from child');
    }
}

@Component({
    selector: 'app-parent',
    template: `
    <h1>Parent Component</h1>
    <app-child [value]="parentValue" (valueChange)="parentValue = $event"></app-child>
    <p>Parent value: {{ parentValue }}</p>
  `
})
export class ParentComponent {
    parentValue = 'Initial value';
}

/**
 * ViewChild and ViewChildren:
 * Allow a parent component to access the instance of a child component.
 */

@Component({
    selector: 'app-parent',
    template: `
      <h1>Parent Component</h1>
      <app-child #childRef></app-child>
      <button (click)="onClick()">Call Child Method</button>
    `
})
export class ParentComponent {
    @ViewChild('childRef') childComponent: ChildComponent;

    onClick() {
        this.childComponent.doSomething();
    }
}

@Component({
    selector: 'app-child',
    template: `
      <h2>Child Component</h2>
    `
})
export class ChildComponent {
    doSomething() {
        console.log('Child component method called');
    }
}

/**
 * Service-based Communication:
 * Services can be used to facilitate communication between components that don't have a direct
 * parent-child relationship.
 */

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private sharedData = 'Default data';

    getSharedData(): string {
        return this.sharedData;
    }

    setSharedData(data: string) {
        this.sharedData = data;
    }
}

@Component({
    selector: 'app-component-a',
    template: `
      <h2>Component A</h2>
      <p>Shared data: {{ sharedData }}</p>
      <button (click)="updateSharedData()">Update Shared Data</button>
    `
})
export class ComponentAComponent {
    sharedData: string;

    constructor(private dataService: DataService) {
        this.sharedData = this.dataService.getSharedData();
    }

    updateSharedData() {
        this.dataService.setSharedData('New shared data');
    }
}

@Component({
    selector: 'app-component-b',
    template: `
      <h2>Component B</h2>
      <p>Shared data: {{ sharedData }}</p>
    `
})
export class ComponentBComponent {
    sharedData: string;

    constructor(private dataService: DataService) {
        this.sharedData = this.dataService.getSharedData();
    }
}

/**
 * 18. Dynamic Components
 *
 * Dynamic components are components that are created and inserted into the DOM at runtime. 
 * 
 * Key Concepts:
 * - ComponentFactoryResolver: Resolves a component factory to create components dynamically.
 * - ViewContainerRef: Container for dynamically attaching components to a specific view location.
 * - ComponentRef: Reference to a dynamically created component.
 * - ngComponentOutlet: Directive for inserting components into the DOM dynamically without manual resolution.
 *
 */

import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, Type } from '@angular/core';

/* Step 1: Define the components that will be dynamically loaded */
@Component({
    selector: 'app-dynamic-child-one',
    template: `<p>Dynamic Child One Component</p>`
})
export class DynamicChildOneComponent { }

@Component({
    selector: 'app-dynamic-child-two',
    template: `<p>Dynamic Child Two Component</p>`
})
export class DynamicChildTwoComponent { }

/* Step 2: Create a host component that will load the dynamic components */
@Component({
    selector: 'app-dynamic-component-loader',
    template: `
    <div>
      <h3>Dynamic Component Loader</h3>
      <button (click)="loadComponent(1)">Load Component One</button>
      <button (click)="loadComponent(2)">Load Component Two</button>
      <ng-template #dynamicComponentContainer></ng-template>
    </div>
  `
})
export class DynamicComponentLoaderComponent implements OnInit {
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

    /* Step 3: Inject the ComponentFactoryResolver service */
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit(): void { }

    /* Step 4: Load the dynamic component */
    loadComponent(componentNumber: number) {
        this.container.clear();

        let componentToLoad: Type<any>;

        if (componentNumber === 1) {
            componentToLoad = DynamicChildOneComponent;
        } else if (componentNumber === 2) {
            componentToLoad = DynamicChildTwoComponent;
        } else {
            return;
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
        this.container.createComponent(componentFactory);
    }
}

/* Using ngComponentOutlet */
@Component({
    selector: 'app-dynamic-component-outlet',
    template: `
      <div>
        <h3>Dynamic Component Outlet</h3>
        <button (click)="toggleComponent()">Toggle Component</button>
        <ng-container *ngComponentOutlet="component"></ng-container>
      </div>
    `
})
export class DynamicComponentOutletComponent {
    component: Type<any> | null = DynamicChildOneComponent;

    toggleComponent() {
        this.component = this.component === DynamicChildOneComponent ? DynamicChildTwoComponent : DynamicChildOneComponent;
    }
}

// Main app component
@Component({
    selector: 'app-root',
    template: `
      <div>
        <app-dynamic-component-loader></app-dynamic-component-loader>
        <app-dynamic-component-outlet></app-dynamic-component-outlet>
      </div>
    `
})
export class AppComponent { }

/**
 * 19. Content Projection
 * 
 * Content projection is a powerful feature in Angular that allows you to pass content 
 * from a parent component into a child component.
 * 
 * Angular provides three types of content projection:
 * Single-slot: Used when only one slot is needed to project content.
 * Multi-slot: Allows projection into multiple slots, each identified by a unique selector.
 * Conditional: Based on structural directives (e.g., *ngIf) to conditionally display content. 
 * 
 * Common use cases include:
 * - Creating reusable components like modals, tabs, cards, and wrappers.
 * - Customizing the layout of a child component from the parent component.
 */

import { Component } from '@angular/core';

/* Single-slot */
@Component({
    selector: 'app-single-slot',
    template: `
        <div class="single-slot">
            <ng-content></ng-content>
        </div>
    `
})
export class SingleSlotComponent { }

/* Multi-slot */
@Component({
    selector: 'app-multi-slot',
    template: `
        <div class="multi-slot">
            <header>
                <ng-content select="[slot=header]"></ng-content>
            </header>
            <main>
                <ng-content select="[slot=content]"></ng-content>
            </main>
            <footer>
                <ng-content select="[slot=footer]"></ng-content>
            </footer>
        </div>
    `
})
export class MultiSlotComponent { }

/** Conditional content projection */
@Component({
    selector: 'app-conditional-content',
    template: `
        <div *ngIf="isVisible" class="conditional-content">
            <ng-content></ng-content>
        </div>
    `
})
export class ConditionalContentComponent {
    isVisible = true;
}

/** Demonstration of content projection */
@Component({
    selector: 'app-content-projection-demo',
    template: `
        <app-single-slot>
            <p>This is projected content in a single-slot component.</p>
        </app-single-slot>

        <app-multi-slot>
            <div slot="header">Header Content</div>
            <div slot="content">Main Content</div>
            <div slot="footer">Footer Content</div>
        </app-multi-slot>

        <app-conditional-content>
            <p>This content is conditionally projected based on a directive.</p>
        </app-conditional-content>
    `
})
export class ContentProjectionDemoComponent { }

/**
 * 20. Angular State Management with NgRx
 *
 * As applications grow in size and complexity, managing state becomes increasingly challenging.
 * NgRx provides reactive state management for Angular apps, inspired by Redux.
 * 
 * NgRx provides several key concepts:
 * - Store: The centralized state container for the application.
 * - Actions: Events that describe state changes.
 * - Reducers: Pure functions that determine how the state changes in response to actions.
 * - Selectors: Functions to select and derive pieces of state.
 * - Effects: Side effects that interact with external services or handle complex logic.
 * - Entity: A feature to manage collections of entities in a normalized way.
 * 
 * By using NgRx, you can manage the state of your application predictably and 
 * maintainable, especially as your application scales.
 */

import { createAction, createReducer, on, props, Store, select } from '@ngrx/store';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, delay } from 'rxjs/operators';

/* Actions */
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const setCount = createAction('[Counter Component] Set', props<{ count: number }>());
export const incrementAsync = createAction('[Counter Component] Increment Async');

/* State Interface */
export interface CounterState {
    count: number;
}

/** Initial State */
export const initialState: CounterState = {
    count: 0,
};

/** Reducer */
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, (state) => ({ ...state, count: 0 })),
    on(setCount, (state, { count }) => ({ ...state, count })),
);

/* Selectors */
export const selectCount = (state: { counter: CounterState }) => state.counter.count;

/* Effects */
@Injectable()
export class CounterEffects {

    incrementAsync$ = createEffect(() =>
        this.actions$.pipe(
            ofType(incrementAsync),
            delay(1000),  // Simulate a delay for an async operation
            map(() => increment())  // Dispatch the increment action after the delay
        )
    );

    constructor(private actions$: Actions) { }
}

/* App Module Configuration */
/** 
 * Add 
 * StoreModule.forRoot({ counter: counterReducer }) and 
 * EffectsModule.forRoot([CounterEffects]) 
 * to your AppModule imports 
*/

/** Counter Component */
@Component({
    selector: 'app-counter',
    template: `
        <h1>Counter: {{ count$ | async }}</h1>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
        <button (click)="incrementAsync()">Increment Async</button>
    `
})
export class CounterComponent {
    count$: Observable<number>;

    constructor(private store: Store<{ counter: CounterState }>) {
        this.count$ = this.store.pipe(select(selectCount));
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }

    incrementAsync() {
        this.store.dispatch(incrementAsync());
    }

    setCount(count: number) {
        this.store.dispatch(setCount({ count }));
    }
}

/**
 * 21. Angular CLI in-depth
 * 
 * A powerful tool for developing Angular applications. It allows you to create projects,
 * generate application and library code, and perform a variety of development tasks.
 * 
 * Key features:
 * - Project scaffolding
 * - Development server
 * - Code generation
 * - Build optimization
 * - Testing utilities
 * 
 * Example: Common Angular CLI commands
 * 
 * ng new my-app                 // Create a new Angular project
 * ng generate component my-comp // Generate a new component
 * ng serve                      // Start the development server
 * ng build --prod               // Build the app for production
 * ng test                       // Run unit tests
 * ng e2e                        // Run end-to-end tests
 * ng update                     // Update Angular and other dependencies
 * ng add @angular/material      // Add a new capability to the project
 */ 