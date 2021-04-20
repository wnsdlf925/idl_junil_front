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
import { IdeaPushComponent } from './idea-push/idea-push.component';
import { CheckInfoComponent } from './check-info/check-info.component';
import { ReviseComponent } from './revise/revise.component';
import { PointComponent } from './point/point.component';
import { MyInterComponent } from './my-inter/my-inter.component';
import { MyIdeaComponent } from './my-idea/my-idea.component';
import { CsDetailComponent } from './cs-detail/cs-detail.component';
import { NoticeDetailComponent } from './notice-detail/notice-detail.component';
import { FootComponent } from './foot/foot.component';
import { IdeaResetComponent } from './idea-reset/idea-reset.component';
import { CsResetComponent } from './cs-reset/cs-reset.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { AdNoticeLogComponent } from './ad-notice-log/ad-notice-log.component';
import { AdNoticeResetComponent } from './ad-notice-reset/ad-notice-reset.component';
import { AdNoticeUploadComponent } from './ad-notice-upload/ad-notice-upload.component';
import { AdContactLogComponent } from './ad-contact-log/ad-contact-log.component';
import { AdContactAnswerComponent } from './ad-contact-answer/ad-contact-answer.component';
import { AdCsLogComponent } from './ad-cs-log/ad-cs-log.component';
import { AdCsAnswerComponent } from './ad-cs-answer/ad-cs-answer.component';
import { AdMemberInfoComponent } from './ad-member-info/ad-member-info.component';
import { AdUserBanComponent } from './ad-user-ban/ad-user-ban.component';
import { AdUserSecedeComponent } from './ad-user-secede/ad-user-secede.component';
import { AdUserLogComponent } from './ad-user-log/ad-user-log.component';
import { AdTotalUserLogComponent } from './ad-total-user-log/ad-total-user-log.component';


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
    IdeaPushComponent,
    CheckInfoComponent,
    ReviseComponent,
    PointComponent,
    MyInterComponent,    
    MyIdeaComponent,    
    CsDetailComponent,
    NoticeDetailComponent,
    FootComponent,
    IdeaResetComponent,
    CsResetComponent,
    AdLoginComponent,
    AdNoticeLogComponent,
    AdNoticeResetComponent,
    AdNoticeUploadComponent,
    AdContactLogComponent,
    AdContactAnswerComponent,
    AdCsLogComponent,
    AdCsAnswerComponent,
    AdMemberInfoComponent,
    AdUserBanComponent,
    AdUserSecedeComponent,
    AdUserLogComponent,
    AdTotalUserLogComponent,
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
