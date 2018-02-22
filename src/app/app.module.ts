import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ResolveService } from './services/resolve.service';
import { HttpInterceptorService } from './services/http-interceptor.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'list',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: ListComponent, resolve: { items: ResolveService } },
      { path: ':id', component: ListItemComponent },
    ]
  },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    ListItemComponent,
    NotFoundComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    UserService,
    ResolveService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
