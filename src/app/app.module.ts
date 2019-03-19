import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, MatExpansionModule} from '@angular/material'

import { AppComponent } from './app.component';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './posts/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
