import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BodyComponent } from './Componentes/body/body.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { Ejemplo1Component } from './Componentes/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './Componentes/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './Componentes/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './componentes/ejemplo4/ejemplo4.component';
import { LoginComponent } from './Componentes/login/login.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent, data: { title: '' } },
  { path: 'login', component: LoginComponent },
  { path: 'ejemplo1', component: Ejemplo1Component },
  { path: 'ejemplo2', component: Ejemplo2Component },
  { path: 'ejemplo3', component: Ejemplo3Component },
  { path: 'ejemplo4', component: Ejemplo4Component },
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: '**', component: BodyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
