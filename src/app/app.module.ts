import { RouterModule } from '@angular/router';
import { PostsService } from './posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 

import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    CreatePostComponent,
    EditPostComponent,
    NavBarComponent,
    NotFoundComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'create', component: CreatePostComponent },
      { path: 'edit', component: EditPostComponent },
      { path: 'about', component: AboutPageComponent },
      { path: '', component: ListPostsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
