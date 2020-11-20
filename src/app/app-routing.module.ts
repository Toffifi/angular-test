import { InsidePostComponent } from './inside-post/inside-post.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'card', component: CardContainerComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'posts', component: PostContainerComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'posts/:id', component: InsidePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
