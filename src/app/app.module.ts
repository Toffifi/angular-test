import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth.interceptor';
import { AppCounterService } from './services/app-counter.service';
import { IfnotDirective } from './directives/ifnot.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { StyleDirective } from './directives/style.directive';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { TodoComponent } from './todo/todo.component';
import { InsidePostComponent } from './inside-post/inside-post.component';

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
