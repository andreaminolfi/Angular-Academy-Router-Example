import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './pages/login.component';
import { CatalogComponent } from './pages/catalog.component';
import { ContactsComponent } from './pages/contacts.component';
import { AlbumComponent } from './pages/album.component';
import { PostsComponent } from './pages/posts.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'catalog/:albumId', component: AlbumComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:postId', component: PostComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    ContactsComponent,
    CatalogComponent,
    AlbumComponent,
    PostsComponent,
    PostComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
