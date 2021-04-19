import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AnnoComponent } from './anno/anno.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { IdeaComponent } from './idea/idea.component';
import { NoticeComponent } from './notice/notice.component';
import { CsComponent } from './cs/cs.component';
import { CsUploadComponent } from './cs-upload/cs-upload.component';
import { LoginComponent } from './login/login.component';
import { JoinAuthComponent } from './join-auth/join-auth.component';
import { ChosenAgreeComponent } from './chosen-agree/chosen-agree.component';
import { JoinComponent } from './join/join.component';
import { FindPwComponent } from './find-pw/find-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { IdeaPushComponent } from './idea-push/idea-push.component';
import { CheckInfoComponent } from './check-info/check-info.component';
import { ReviseComponent } from './revise/revise.component';
import { PointComponent } from './point/point.component';
import { MyInterComponent } from './my-inter/my-inter.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { MyIdeaDetailComponent } from './my-idea-detail/my-idea-detail.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NoticeDetailComponent } from './notice-detail/notice-detail.component';


// const appRoutes : Routes = [ { path: '', component: HomeComponent },
//  { path: 'ex', component: ExComponent } ]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnoComponent,
    TopBarComponent,
    IdeaComponent,
    NoticeComponent,
    CsComponent,
    CsUploadComponent,
    LoginComponent,
    JoinAuthComponent,
    ChosenAgreeComponent,
    JoinComponent,
    FindPwComponent,
    ResetPwComponent,
    ContactComponent,
    DetailComponent,
    IdeaPushComponent,
    CheckInfoComponent,
    ReviseComponent,
    PointComponent,
    MyInterComponent,
    IdeaDetailComponent,
    MyIdeaComponent,
    MyIdeaDetailComponent,
    CsDetailComponent,
    NoticeDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
