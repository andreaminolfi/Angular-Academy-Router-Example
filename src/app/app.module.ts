import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './pages/login.component';
import { CatalogComponent } from './pages/catalog.component';
import { ContactsComponent } from './pages/contacts.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    ContactsComponent,
    CatalogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
