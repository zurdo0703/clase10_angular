import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BodyComponent } from './Componentes/body/body.component';
import { FooterComponent } from './Componentes/footer/footer.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'body',      component: BodyComponent },
  {
    path: 'footer',
    component: FooterComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/body',
    pathMatch: 'full'
  },
  { path: '**', component: BodyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
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
