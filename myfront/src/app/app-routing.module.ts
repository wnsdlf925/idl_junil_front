import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnnoComponent } from './anno/anno.component';
import {IdeaComponent} from './idea/idea.component';
import { NoticeComponent } from './notice/notice.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'board/anno', component: AnnoComponent },
  { path: 'board/idea', component: IdeaComponent  },
  { path: 'board/notice', component: NoticeComponent  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }