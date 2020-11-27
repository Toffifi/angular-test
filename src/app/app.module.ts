import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';
import { IfnotDirective } from './directives/ifnot.directive';
import { StyleDirective } from './directives/style.directive';
import { HomeComponent } from './home/home.component';
import { InsidePostComponent } from './inside-post/inside-post.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { AppCounterService } from './services/app-counter.service';
import { TodoComponent } from './todo/todo.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    CounterComponent,
    HomeComponent,
    CardContainerComponent,
    PostContainerComponent,
    TodoComponent,
    InsidePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
